from typing import *

BOARD_SIZE = (11, 11, 11)
COUNT_TO_WIN = 5

GET_BOARD_EMPTY     = 0
GET_BOARD_PLAYER    = 1
GET_BOARD_OPPONENT  = 2

class Game:
    def __init__(self, player0: str, player1: str):
        self.player0: str = player0
        self.player1: str = player1
        self.next   : str = player0
        self.winner : str = ''

        self._board : List[List[List[str]]] = list(map(
            lambda _: list(map(
                lambda _: list(map(
                    lambda _: '',
                    range(BOARD_SIZE[2]))),
                range(BOARD_SIZE[1]))),
            range(BOARD_SIZE[0])))

    def get_board(self, username):
        return list(map(
            lambda d2: list(map(
                lambda d1: list(map(
                    lambda d0:
                        GET_BOARD_PLAYER if d0 == username else
                        GET_BOARD_EMPTY  if d0 == ''       else
                        GET_BOARD_OPPONENT,
                    d1)),
                d2)),
            self._board))
    
    def move(self, username: str, position: Tuple[int, int, int]):
        if self.winner != '':
            raise Exception("Game is already over")
        if username != self.next:
            raise Exception("It's not your turn!")
        if position[0] < 0 or position[0] >= BOARD_SIZE[0]:
            raise Exception("Position out of range!")
        if position[1] < 0 or position[1] >= BOARD_SIZE[1]:
            raise Exception("Position out of range!")
        if position[2] < 0 or position[2] >= BOARD_SIZE[2]:
            raise Exception("Position out of range!")
        if self._board[position[0]][position[1]][position[2]] != '':
            raise Exception("Position is not empty!")
        self._board[position[0]][position[1]][position[2]] = username
        self.next = self.player0 if username == self.player1 else self.player1
        for x in range(BOARD_SIZE[0]):
            for y in range(BOARD_SIZE[1]):
                cnt = 0
                for z in range(BOARD_SIZE[2]):
                    if self._board[x][y][z] == username:
                        cnt += 1
                    else:
                        cnt = 0
                    if cnt == COUNT_TO_WIN:
                        self.winner = username
                        return
        for y in range(BOARD_SIZE[1]):
            for z in range(BOARD_SIZE[2]):
                cnt = 0
                for x in range(BOARD_SIZE[0]):
                    if self._board[x][y][z] == username:
                        cnt += 1
                    else:
                        cnt = 0
                    if cnt == COUNT_TO_WIN:
                        self.winner = username
                        return
        for z in range(BOARD_SIZE[2]):
            for x in range(BOARD_SIZE[0]):
                cnt = 0
                for y in range(BOARD_SIZE[1]):
                    if self._board[x][y][z] == username:
                        cnt += 1
                    else:
                        cnt = 0
                    if cnt == COUNT_TO_WIN:
                        self.winner = username
                        return
