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

const forgotBtn = document.getElementById('auth-forgot');
const resetRow = document.getElementById('auth-reset-row');
const newPasswordInput = document.getElementById('auth-new-password');
const resetBtn = document.getElementById('auth-reset-btn');

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
// Auth chip hidden for now. Auth is still enforced by the API, and sign-in
// remains reachable via the on-demand overlay (promptSignIn on 401/403).
// Flip to true to restore the top-right account button.
const SHOW_AUTH_CHIP = false;

function renderChip(session) {
  if (!chip) return;
  if (!SHOW_AUTH_CHIP) {
    chip.hidden = true;
    return;
  }
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
  showMsg('');
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  const { error } = await supabase.auth.signInWithPassword({
    email: emailInput.value.trim(),
    password: passwordInput.value,
  });
  submitBtn.disabled = false;
  if (error) showMsg(error.message, true);
});

// ------------------------------------------------------------
// Password reset (email recovery link -> set-new-password form)
// ------------------------------------------------------------
function showMsg(text, isError = false) {
  if (!errorEl) return;
  errorEl.textContent = text;
  errorEl.style.color = isError ? '#ff7a7a' : '#7ee2a8';
}

forgotBtn?.addEventListener('click', async () => {
  const email = emailInput.value.trim();
  if (!email) {
    showMsg('Enter your email above first / 請先在上方輸入 Email', true);
    emailInput.focus();
    return;
  }
  forgotBtn.disabled = true;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin,
  });
  forgotBtn.disabled = false;
  showMsg(
    error ? error.message : 'Reset link sent — check your email / 連結已寄出，請至信箱收信',
    !!error,
  );
});

resetBtn?.addEventListener('click', async () => {
  const pw = newPasswordInput.value;
  if (pw.length < 6) {
    showMsg('Password must be at least 6 characters / 密碼至少 6 位', true);
    return;
  }
  resetBtn.disabled = true;
  const { error } = await supabase.auth.updateUser({ password: pw });
  resetBtn.disabled = false;
  if (error) {
    showMsg(error.message, true);
    return;
  }
  newPasswordInput.value = '';
  if (resetRow) resetRow.style.display = 'none';
  showMsg('Password updated / 密碼已更新');
});

supabase.auth.onAuthStateChange((event, session) => {
  setSession(session);
  // User came back via a recovery link: supabase-js has already exchanged it
  // for a session — surface the new-password form so the old one gets replaced.
  if (event === 'PASSWORD_RECOVERY') {
    if (resetRow) resetRow.style.display = 'flex';
    showMsg('Set a new password / 請設定新密碼');
    newPasswordInput?.focus();
  }
});

supabase.auth.getSession().then(({ data }) => setSession(data.session));
