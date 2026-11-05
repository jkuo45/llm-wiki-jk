// Entry: defers the real graph module (and its three.js dependency) to a
// dynamic-import chunk so the HTML shell paints before the 985 kB bundle lands.
import('./graph-main.js');
