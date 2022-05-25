from uuid import *
import flask

from room import Room

app = flask.Flask(__name__,
    static_url_path='/static/', 
    static_folder='../web/public/',)

app.secret_key = 'secret'

users = {}
rooms = {}

@app.route("/", methods=["GET"])
def index():
    return flask.send_from_directory("../web/public", "index.html")

@app.route("/api/v1/login", methods=["POST"])
def login():
    if flask.session.get("user") is not None:
        return flask.jsonify({
            "status": "error",
            "message": "Already logged in"}, 200)
    user_id = uuid1()
    flask.session["user_id"] = user_id
    users[user_id] = {
        "username": flask.request.json["username"],
        "room": None
    }
    return flask.make_response({
        "status": "success",
    }, 200)

@app.route("/api/v1/logout", methods=["POST"])
def logout():
    try:
        user_id = flask.session["user_id"]
        del users[user_id]
        del flask.session["user_id"]
    except KeyError:
        pass
    return flask.make_response({
        "status": "success",
    }, 200)

@app.route("/api/v1/rooms", methods=["GET"])
def get_rooms():
    return flask.make_response({
        "status": "success",
        "data": list(map(lambda room_id: {
            "id": room_id,
            "name": rooms[room_id].get_name(),
            "started": rooms[room_id].is_started(),
            "player_count": rooms[room_id].get_player_count(),
        }, rooms.keys())),
    }, 200)
@app.route("/api/v1/rooms/<uuid:room_id>", methods=["GET"])
def get_room(room_id):
    return flask.make_response({
        "status": "success",
        "data": {
            "id": room_id,
            "name": rooms[room_id].get_name(),
            "started": rooms[room_id].is_started(),
            "player_count": rooms[room_id].get_player_count(),
        }
    }, 200)

@app.route("/api/v1/new-room", methods=["POST"])
def new_room():
    room = Room("Room " + str(len(rooms) + 1), flask.session["user_id"])
    rooms[room.get_id()] = room
    users[flask.session["user_id"]]["room"] = room.get_id()
    flask.session["room_id"] = room.get_id()
    return flask.make_response({
        "status": "success",
        "data": {
            "room_id": room.get_id(),
            "room_name": room.get_name(),
        }
    }, 200)

@app.route("/api/v1/join-room", methods=["POST"])
def join_room():
    room_id = UUID(flask.request.json["room_id"])
    if room_id not in rooms.keys():
        return flask.make_response({
            "status": "error",
            "message": "Room not found",
        }, 404)
    room = rooms[room_id]
    if not room.is_started():
        flask.session["room_id"] = room.get_id()
        room.add_player(flask.session["user_id"])
        room.start_game()
        return flask.make_response({
            "status": "success"
        })
    return flask.make_response({
        "status": "error",
        "message": "Game has started",
    }, 400)

@app.route("/api/v1/game/move-count", methods=["GET"])
def get_move_count():
    room_id = flask.session["room_id"]
    if room_id not in rooms.keys():
        return flask.make_response({
            "status": "error",
            "message": "Room not found",
        }, 404)
    room = rooms[room_id]
    if not room.is_started():
        return flask.make_response({
            "status": "error",
            "message": "Game not started",
        }, 400)
    return flask.make_response({
        "status": "success",
        "data": {
            "move_count": room.get_game().get_move_count(),
        }
    }, 200)

@app.route("/api/v1/game/me-next", methods=["GET"])
def get_me_next():
    player_id = flask.session["user_id"]
    room_id = flask.session["room_id"]
    if room_id not in rooms.keys():
        return flask.make_response({
            "status": "error",
            "message": "Room not found",
        }, 404)
    room = rooms[room_id]
    if not room.is_started():
        return flask.make_response({
            "status": "error",
            "message": "Game not started",
        }, 400)
    return flask.make_response({
        "status": "success",
        "data": room.get_game().get_player_next() == player_id,
    }, 200)

@app.route("/api/v1/game/move", methods=["POST"])
def move():
    player_id = flask.session["user_id"]
    room_id = flask.session["room_id"]
    if room_id not in rooms.keys():
        return flask.make_response({
            "status": "error",
            "message": "Room not found",
        }, 404)
    room = rooms[room_id]
    if not room.is_started():
        return flask.make_response({
            "status": "error",
            "message": "Game not started",
        }, 400)
    if player_id != room.get_game().get_player_next():
        return flask.make_response({
            "status": "error",
            "message": "Not your turn",
        }, 400)
    x = flask.request.json["x"]
    y = flask.request.json["y"]
    z = flask.request.json["z"]
    room.get_game().move(player_id, [x, y, z])
    return flask.make_response({
        "status": "success",
    }, 200)

@app.route("/api/v1/game/board", methods=["GET"])
def get_board():
    player_id = flask.session["user_id"]
    room_id = flask.session["room_id"]
    if room_id not in rooms.keys():
        return flask.make_response({
            "status": "error",
            "message": "Room not found",
        }, 404)
    room = rooms[room_id]
    if not room.is_started():
        return flask.make_response({
            "status": "error",
            "message": "Game not started",
        }, 400)
    return flask.make_response({
        "status": "success",
        "data": room.get_game().get_board(player_id),
    }, 200)

@app.route("/api/v1/game/winner", methods=["GET"])
def get_winner():
    player_id = flask.session["user_id"]
    room_id = flask.session["room_id"]
    if room_id not in rooms.keys():
        return flask.make_response({
            "status": "error",
            "message": "Room not found",
        }, 404)
    room = rooms[room_id]
    if not room.is_started():
        return flask.make_response({
            "status": "error",
            "message": "Game not started",
        }, 400)
    return flask.make_response({
        "status": "success",
        "data":
            1 if room.get_game().get_winner() == player_id else
            0 if room.get_game().get_winner() is None else
            -1,
    }, 200)

