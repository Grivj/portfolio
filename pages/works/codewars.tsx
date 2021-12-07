import { Box, Link, Tag, Text } from "@chakra-ui/react"
import Code from "../../components/App/Code"
import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"
import ThumbCodewars from "../../public/works/codewars/thumbnail.webp"

const sudokuCode = `
"""
Write a function that will solve a 9x9 Sudoku puzzle.
The function will take one argument consisting of the 2D puzzle array,
with the value 0 representing an unknown square.
The Sudokus tested against your function will be "easy"
(i.e. determinable; there will be no need to assume and test possibilities on unknowns)
and can be solved with a brute-force approach.
"""
class Sudoku:
    """
    Sudoku base class
    9x9 grid, x: horizontal row, y: vertical col
    """

    def __init__(self, grid: List[List[int]]):
        self.grid = grid

    def get_horizontal(self, x: int) -> List[int]:
        """Returns the digits of the horizontal x-th row"""
        return self.grid[x]

    def get_vertical(self, y: int) -> List[int]:
        """Returns the digits of the vertical y-th column"""
        return [row[y] for row in self.grid]

    def get_square(self, x: int, y: int) -> List[int]:
        """Returns the digits of the 3x3 square at the x, y coordinates"""
        square_row = x // 3 * 3
        square_col = y // 3 * 3
        return [
            digit for col in self.grid[square_row:square_row + 3]
            for digit in col[square_col:square_col + 3]
        ]

    def get_all(self, x: int, y: int) -> List[int]:
        """Returns the digits of the row, col and square"""
        return self.get_horizontal(x) + self.get_vertical(y) + self.get_square(x, y)

    def display(self):
        for row in self.grid:
            print(row)
`.trim()


const sudokuCode2 = `
class SudokuSolver:

    def __call__(self, sudoku: Sudoku, verbose: bool = False):
        self.solved_sudoku = sudoku

        if verbose:
            self._init_with_verbose()
        else:
            self._init()

        return self.solved_sudoku

    def _init_with_verbose(self):
        print("Solving the sudoku...")
        time_start = time.time()
        if not self.solve():
            raise Exception("Error while solving the sudoku")
        time_end = time.time()
        print(
            f"Sudoku solved in {round((time_end - time_start) * 1000)}ms!")

    def _init(self):
        if not self.solve():
            raise Exception("Error while solving the sudoku")

    def find_empty(self):
        """
        Find the first empty cell in the sudoku, an empty cell contains a 0 digit.
        If no empty cell found, returns None.
        """
        for x in range(9):
            for y in range(9):
                if not self.solved_sudoku.grid[x][y]:
                    return x, y
        return None

    def solve(self):
        cell = self.find_empty()
        if not cell:
            return self.solved_sudoku

        x, y = cell
        presents = set(self.solved_sudoku.get_all(x, y))
        for possibility in set(range(10)) - presents:
            self.solved_sudoku.grid[x][y] = possibility

            if self.solve():
                return self.solved_sudoku

            self.solved_sudoku.grid[x][y] = 0

        return False
`.trim()

const sudokuCode3 = `
class SudokuTest(unittest.TestCase):
    def basic_tests(self):
        puzzle = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ]

        solution = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]

        solver = SudokuSolver()
        solved = solver(Sudoku(puzzle))

        self.assertEqual(
            solved.grid, solution,
            "Incorrect solution for the following puzzle: " + str(puzzle)
        )
`.trim()

const observedCode = `
"""
    Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
    We followed him to a secret warehouse, where we assume to find all the stolen stuff.
    The door to this warehouse is secured by an electronic combination lock.
    Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
    The keypad has the following layout:
    ┌───┬───┬───┐
    │ 1 │ 2 │ 3 │
    ├───┼───┼───┤
    │ 4 │ 5 │ 6 │
    ├───┼───┼───┤
    │ 7 │ 8 │ 9 │
    └───┼───┼───┘
        │ 0 │
        └───┘
    He noted the PIN 1357, but he also said,
    it is possible that each of the digits he saw could actually be another adjacent digit
    (horizontally or vertically, but not diagonally).
    E.g. instead of the 1 it could also be the 2 or 4.
    And instead of the 5 it could also be the 2, 4, 6 or 8.
    He also mentioned, he knows this kind of locks.
    You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm.
    That's why we can try out all possible (*) variations.
    * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
    Can you help us to find all those variations?
    It would be nice to have a function,
    that returns an array of all variations for an observed PIN with a length of 1 to 8 digits.
    We could name the function getPINs (get_pins in python, GetPINs in C#).
    But please note that all PINs, the observed one and also the results, must be strings,
    because of potentially leading '0's. We already prepared some test cases for you.
    Detective, we are counting on you!
"""


def get_pins(observed):
    keypad = Keypad()
    adjacent_digits = []

    for digit in observed:
        x, y = keypad.get_digit_index(digit)
        adjacent_digits.append(keypad.get_adjacent_digits(x, y))
    return ["".join(p) for p in product(*adjacent_digits)]


class Keypad:
    def __init__(self, keypad: list = None):
        self.keypad = keypad or [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            [' ', '0', ' ']
        ]

    def get_digit_index(self, digit: str):
        for row_idx, row in enumerate(self.keypad):
            if digit in row:
                return row_idx, row.index(digit)

        raise IndexError(f"Digit '{digit}' not on the keypad.")

    def get_adjacent_digits(self, x: int, y: int):
        """
        Returns a list of digits adjacent to (x, y)
        from: 
            top digit (x - 1, y)
            middle digits (x, y - 1:y + 1)
            bottom digit (x + 1, y)
        """
        top = self.keypad[x - 1][y] if x != 0 else None
        mid = self.keypad[x][max(y - 1, 0): min(y + 2, 3)]
        bot = self.keypad[x + 1][y] if x < 3 else None

        if ' ' in mid:
            mid = [i for i in mid if i != ' ']

        digits = []
        if top:
            digits.append(top)
        for i in mid:
            digits.append(i)
        if bot and bot != ' ':
            digits.append(bot)
        return digits
`.trim()

const WorkCodewars = () => (
    <Work>
        <WorkHeader
            title="Codewars"
            intro="Personal contributions on Codewars.com"
            thumbnail={ThumbCodewars}
            tags={["Python", "UnitTesting"]}
            links={
                [
                    { href: "https://www.codewars.com/users/Grivj", title: "CodeWars profile" },
                ]
            }

        />
        <WorkBody>
            <Text>I&apos;ve recently started using <Link isExternal href="https://www.codewars.com/">Codewars.com</Link> and been enjoying it so far.</Text>
            <WorkSectionTitle>Some problems I liked</WorkSectionTitle>
            <Box m="10px 0">
                <Text>
                    <Link isExternal href="https://www.codewars.com/kata/5296bc77afba8baa690002d7">Sudoku Solver <Tag color="#3c7ebb">3 kyu</Tag></Link>
                </Text>
                <Code code={sudokuCode} language="python" />
                <Code code={sudokuCode2} language="python" />
                <Code code={sudokuCode3} language="python" />

            </Box>
            <Box>
                <Text>
                    <Link isExternal href="https://www.codewars.com/kata/5263c6999e0f40dee200059d">The observed PIN <Tag color="#3c7ebb">4 kyu</Tag></Link>
                </Text>
                <Code code={observedCode} language="python" />

            </Box>
        </WorkBody>
    </Work>
)

export default WorkCodewars