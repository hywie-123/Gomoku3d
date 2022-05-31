
from time import sleep
from typing import *
from multiprocessing import Process, Pipe
from multiprocessing.connection import Connection

from server.game import Game
from server.ai   import nextstep

class GameVsAI(Game):
    def __init__(self, username: str):
        self.ai_username = '__internal__'
        super().__init__(username, self.ai_username)

        rx, tx = Pipe()
        self.ai_pipe = rx
        self.ai_proc = Process(
            target= GameVsAI.ai_entry,
            args  =(tx,))
        self.ai_proc.start()

    def __del__(self):
        self.ai_dispose()

    def get_board(self, username):
        if self.ai_pipe and self.ai_pipe.poll():
            super().move(self.ai_username, self.ai_pipe.recv())
        return super().get_board(username)

    def get_board_for_ai(self):
        return list(map(
            lambda d2: list(map(
                lambda d1: list(map(
                    lambda d0:
                        1 if d0 == self.ai_username else
                        0 if d0 == '' else
                        -1,
                    d1)),
                d2)),
            self._board))

    def move(self, username: str, position: Tuple[int, int, int]):
        super().move(username, position)
        if self.winner != '':
            self.ai_dispose()
        if self.winner == '' and self.next == self.ai_username:
            self.ai_pipe.send(self.get_board_for_ai())

    def ai_entry(pipe: Connection):
        while True:
            if pipe.poll():
                req = pipe.recv()
                if req is None:
                    return
                board = req

                print("AI is thinking...")
                res = nextstep(board)
                pipe.send(res)
                print("AI moved to", res)
            sleep(1)

    def ai_dispose(self):
        self.ai_pipe.send(None)
        self.ai_pipe.close()
        self.ai_proc.join()
        self.ai_pipe = None
        self.ai_proc = None

