"""Loader for scripts/*.py modules in the offline test suite.

Script filenames are not valid Python identifiers (numeric prefixes, dashes),
and scripts/ is not a package, so tests import them via importlib from the
file path. The scripts dir is prepended to sys.path first because several
scripts import their siblings at module level (e.g. 05_build_combined.py does
`from _graph_common import ...`).

Modules are cached in sys.modules under a "script_" prefix so monkeypatched
module attributes stay scoped to a single test (monkeypatch restores them).
"""

import importlib.util
import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).resolve().parent.parent / "scripts"


def load_script(name: str):
    """Import `scripts/<name>.py` and return the module object."""
    mod_name = "script_" + name.removesuffix(".py").replace("-", "_").replace(".", "_")
    if mod_name in sys.modules:
        return sys.modules[mod_name]
    if str(SCRIPTS_DIR) not in sys.path:
        sys.path.insert(0, str(SCRIPTS_DIR))
    path = SCRIPTS_DIR / f"{name}.py"
    spec = importlib.util.spec_from_file_location(mod_name, path)
    assert spec is not None and spec.loader is not None, f"cannot load {path}"
    module = importlib.util.module_from_spec(spec)
    sys.modules[mod_name] = module
    spec.loader.exec_module(module)
    return module
