from uuid  import *
from flask import *

from server.game import Game

global wait, games
games = {}
wait = ''

app = Blueprint("api_v2_game", __name__)

@app.route("join", methods=["GET"])
def join_poll():
    if not session.get("username"):
        return { "status": "error", "message": "Not logged in." }
    for game_id, game in games.items():
        if game.winner == '':
            if  game.player0 == session["username"] or \
                game.player1 == session["username"]:
                return {
                    "status": "success",
                    "data": {
                        "game_id": str(game_id)
                    }
                }
    global wait
    if wait == '':
        wait = session["username"]
    if wait == session["username"]:
        return { "status": "waiting" }
    game_id = str(uuid1())
    games[game_id] = Game(session.get("username"), wait)
    wait = ''
    return {
        "status": "success",
        "data": {
            "game_id": str(game_id)
        }
    }

@app.route("games/<string:game_id>", methods=["GET"])
def game(game_id: str):
    if not session.get("username"):
        return { "status": "error", "message": "Not logged in." }
    if not games.get(game_id):
        return { "status": "error", "message": "Unknown game id." }
    return {
        "status": "success",
        "data": {
            "next"  : games[game_id].next,
            "board" : games[game_id].get_board(session["username"]),
            "winner": games[game_id].winner,
        }
    }

@app.route("games/<string:game_id>", methods=["POST"])
def move(game_id: str):
    if not session.get("username"):
        return { "status": "error", "message": "Not logged in." }
    if not games.get(game_id):
        return { "status": "error", "message": "Not in game." }
    if session["username"] != games[game_id].next:
        return { "status": "error", "message": "Not your turn." }
    if games[game_id].winner != '':
        return { "status": "error", "message": "Game ended." }
    x = request.json["x"]
    y = request.json["y"]
    z = request.json["z"]
    games[game_id].move(session["username"], [x, y, z])
    return {
        "status": "success",
        "data": {
            "next"  : games[game_id].next,
            "board" : games[game_id].get_board(session["username"]),
            "winner": games[game_id].winner,
        }
    }
