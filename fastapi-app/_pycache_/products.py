import json
from pathlib import Path
from typing import List, Dict

DATA_FILE = Path(__file__).parent.parent

def load_products() -> list[dict]:
    if not DATA_FILE.exists():
        return[]
    with open(DATA_FILE, "r", encoding="utf_8") as file:
        return json.load(file)