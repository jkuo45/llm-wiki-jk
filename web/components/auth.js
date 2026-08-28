// Supabase auth. The site has a single super admin. Browsing is public —
// the top-bar chip shows "Sign in" for guests and the Google avatar (with a
// sign-out menu) once signed in. The sign-in overlay is on-demand only: it
// opens from the chip or when a protected API call comes back 401/403, never
// blocking the page on load. Mutating API calls carry the access token
// (`authHeaders()`), which the FastAPI adapter verifies against Supabase.
// Override the project via window.SUPABASE_URL / window.SUPABASE_ANON_KEY.

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = window.SUPABASE_URL || 'https://xanedntifdehgkvogiqb.supabase.co';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'sb_publishable__e9J8fhCInKsa-VxlpKG6g_EAKdr7KR';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let accessToken = null;

export function authHeaders() {
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
}

const overlay = document.getElementById('auth-overlay');
const form = document.getElementById('auth-form');
const googleBtn = document.getElementById('auth-google');
const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const errorEl = document.getElementById('auth-error');

const chip = document.getElementById('auth-chip');
const signinBtn = document.getElementById('auth-signin-btn');
const userWrap = document.getElementById('auth-user');
const avatarBtn = document.getElementById('auth-avatar-btn');
const avatarImg = document.getElementById('auth-avatar-img');
const avatarFallback = document.getElementById('auth-avatar-fallback');
const userName = document.getElementById('auth-user-name');
const userMenu = document.getElementById('auth-user-menu');
const userEmail = document.getElementById('auth-user-email');
const signoutBtn = document.getElementById('auth-signout');

// ------------------------------------------------------------
// Overlay (on-demand sign-in card)
// ------------------------------------------------------------
export function promptSignIn() {
  if (overlay && !accessToken) overlay.style.display = 'flex';
}

function hideOverlay() {
  if (overlay) overlay.style.display = 'none';
}

overlay?.addEventListener('click', (e) => {
  // Click on the backdrop dismisses — browsing stays possible without auth.
  if (e.target === overlay) hideOverlay();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay?.style.display === 'flex') hideOverlay();
});

// ------------------------------------------------------------
// Top-bar chip
// ------------------------------------------------------------
function renderChip(session) {
  if (!chip) return;
  chip.hidden = false;
  const user = session?.user;
  if (user) {
    const meta = user.user_metadata || {};
    const name = meta.full_name || meta.name || user.email || '?';
    signinBtn.hidden = true;
    userWrap.hidden = false;
    userMenu.hidden = true;
    const initial = name.trim().charAt(0).toUpperCase();
    if (meta.avatar_url) {
      avatarImg.src = meta.avatar_url;
      avatarImg.hidden = false;
      avatarFallback.hidden = true;
    } else {
      avatarImg.hidden = true;
      avatarImg.removeAttribute('src');
      avatarFallback.hidden = false;
      avatarFallback.textContent = initial;
    }
    userName.textContent = name;
    userEmail.textContent = user.email || '';
  } else {
    userWrap.hidden = true;
    signinBtn.hidden = false;
  }
}

avatarBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  userMenu.hidden = !userMenu.hidden;
});

document.addEventListener('click', (e) => {
  if (!userMenu.hidden && userWrap && !userWrap.contains(e.target)) userMenu.hidden = true;
});

signoutBtn?.addEventListener('click', async () => {
  userMenu.hidden = true;
  await supabase.auth.signOut();
});

signinBtn?.addEventListener('click', () => promptSignIn());

// ------------------------------------------------------------
// Session state + sign-in flows
// ------------------------------------------------------------
function setSession(session) {
  accessToken = session?.access_token || null;
  renderChip(session);
  if (session) hideOverlay();
}

// Default path: Google OAuth. Redirects to Supabase, which bounces through
// Google and back to window.location.origin — onAuthStateChange picks up the
// session on return.
googleBtn?.addEventListener('click', async () => {
  errorEl.textContent = '';
  googleBtn.disabled = true;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });
  if (error) {
    googleBtn.disabled = false;
    errorEl.textContent = error.message;
  }
});

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorEl.textContent = '';
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  const { error } = await supabase.auth.signInWithPassword({
    email: emailInput.value.trim(),
    password: passwordInput.value,
  });
  submitBtn.disabled = false;
  if (error) errorEl.textContent = error.message;
});

supabase.auth.onAuthStateChange((_event, session) => setSession(session));

supabase.auth.getSession().then(({ data }) => setSession(data.session));
