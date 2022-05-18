from typing import *
from uuid   import *
from flask  import jsonify

BOX_EMPTY   = uuid1()
BOX_NEUTRAL = uuid1()

PLAYER_NONE = uuid1()

COUNT_TO_WIN = 5

class Game:
    def __init__(self,
        players   : List [UUID],
        board_size: Tuple[int, int, int] = (11, 11, 11),):
        self.__board_size   : Tuple[int, int, int] = board_size
        self.__move_count   : int                  = 1
        self.__players      : List[UUID]           = players
        self.__player_next  : UUID                 = players[0]
        self.__winner       : UUID                 = PLAYER_NONE

        self.__board        : List[List[List[UUID]]]    = list(map(
            lambda _: list(map(
                lambda _: list(map(
                    lambda _: BOX_EMPTY,
                    range(board_size[2]))),
                range(board_size[1]))),
            range(board_size[0])))
        self.__board \
            [(self.__board_size[0] - 1) // 2] \
            [(self.__board_size[1] - 1) // 2] \
            [(self.__board_size[2] - 1) // 2] = BOX_NEUTRAL

    def get_board_size(self):
        return self.__board_size
    def get_board_as_json(self):
        return jsonify(self.__board)
    def get_board(self, player_id):
        return list(map(
            lambda d2: list(map(
                lambda d1: list(map(
                    lambda d0:
                        1 if d0 == player_id else
                        -1 if d0 == BOX_NEUTRAL else
                        0 if d0 == BOX_EMPTY else 2,
                    d1)),
                d2)),
            self.__board))
    def get_move_count(self):
        return self.__move_count
    def get_player_count(self):
        return len(self.__players)
    def get_player_next(self):
        return self.__player_next
    def get_winner(self):
        return None if self.__winner == PLAYER_NONE else self.__winner
    
    def move(self, player_id: UUID, position: Tuple[int, int, int]):
        if self.__winner != PLAYER_NONE:
            raise Exception("Game is already over")
        if player_id != self.__player_next:
            raise Exception("It's not your turn!")
        if position[0] < 0 or position[0] >= self.__board_size[0]:
            raise Exception("Position out of range!")
        if position[1] < 0 or position[1] >= self.__board_size[1]:
            raise Exception("Position out of range!")
        if position[2] < 0 or position[2] >= self.__board_size[2]:
            raise Exception("Position out of range!")
        if self.__board[position[0]][position[1]][position[2]] != BOX_EMPTY:
            raise Exception("Position is not empty!")
        self.__board[position[0]][position[1]][position[2]] = player_id
        self.__move_count += 1
        self.__player_next = self.__players[
            (self.__players.index(player_id) + 1) % len(self.__players)]
        for x in range(self.__board_size[0]):
            for y in range(self.__board_size[1]):
                cnt = 0
                for z in range(self.__board_size[2]):
                    if self.__board[x][y][z] == player_id:
                        cnt += 1
                    else:
                        cnt = 0
                    if cnt == COUNT_TO_WIN:
                        self.__winner = player_id
                        return
        for y in range(self.__board_size[1]):
            for z in range(self.__board_size[2]):
                cnt = 0
                for x in range(self.__board_size[0]):
                    if self.__board[x][y][z] == player_id:
                        cnt += 1
                    else:
                        cnt = 0
                    if cnt == COUNT_TO_WIN:
                        self.__winner = player_id
                        return
        for z in range(self.__board_size[2]):
            for x in range(self.__board_size[0]):
                cnt = 0
                for y in range(self.__board_size[1]):
                    if self.__board[x][y][z] == player_id:
                        cnt += 1
                    else:
                        cnt = 0
                    if cnt == COUNT_TO_WIN:
                        self.__winner = player_id
                        return

