from typing import *
from uuid   import *

from game import Game

class Room:
    def __init__(self, name = "", host = None):
        self.__id       : UUID          = uuid1()
        self.__name     : str           = name
        self.__players  : List[UUID]    = [host]
        self.__host     : UUID          = host
        self.__game     : Game          = None
    
    def get_id(self):
        return self.__id
    def get_name(self):
        return self.__name
    def get_host(self):
        return self.__host
    def get_players(self):
        return self.__players
    def get_player_count(self):
        return len(self.__players)
    def is_started(self):
        return self.__game is not None
    def add_player(self, player_id):
        self.__players.append(player_id)
    def start_game(self):
        self.__game = Game(self.__players)
    def get_game(self):
        return self.__game
