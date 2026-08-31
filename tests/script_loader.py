"""Loader for scripts package modules in the offline test suite.

scripts/ is a package (scripts.lib.* etc.), but tests load script modules
under a "script_" prefix via importlib so monkeypatched module attributes
stay scoped to a single test (monkeypatch restores them). The scripts dir
and the repo root are prepended to sys.path because the scripts import
their siblings through the `scripts.lib.*` package namespace.

Usage: load_script("lib/graph_common") -> the module at scripts/lib/graph_common.py
"""

import importlib.util
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = REPO_ROOT / "scripts"


def load_script(name: str):
    """Import `scripts/<name>.py` (e.g. "lib/graph_common") and return the module."""
    mod_name = (
        "script_"
        + name.removesuffix(".py").replace("/", "_").replace("-", "_").replace(".", "_")
    )
    if mod_name in sys.modules:
        return sys.modules[mod_name]
    for p in (str(SCRIPTS_DIR), str(REPO_ROOT)):
        if p not in sys.path:
            sys.path.insert(0, p)
    path = SCRIPTS_DIR / f"{name}.py"
    spec = importlib.util.spec_from_file_location(mod_name, path)
    assert spec is not None and spec.loader is not None, f"cannot load {path}"
    module = importlib.util.module_from_spec(spec)
    sys.modules[mod_name] = module
    spec.loader.exec_module(module)
    return module
