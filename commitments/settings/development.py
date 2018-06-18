from .default import *

try:
    from .local_settings.py import *
except ImportError:
    pass