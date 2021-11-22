from enum import Enum

class EXPERIENCE(Enum):
    OneYear:0

deep_learning: dict[str, EXPERIENCE] = {
    "Python": EXPERIENCE.OneYear,
} 

