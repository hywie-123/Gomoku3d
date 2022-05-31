from flask import *

from server.models.users import DbUser

app = Blueprint("api_v2_users", __name__)

@app.route("login", methods=["GET"])
def login_get():
    if session.get("uid"):
        user = DbUser.select().where(DbUser.uid == session["uid"])
        if user.count() == 0:
            return login_delete()
        user = user.get()
        return {
            "status": "success",
            "data": {
                "uid": session["uid"],
                "username": user.username,
            },
        }
    else:
        return { "status": "success" }

@app.route("login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    if not username:
        return {
            "status": "error",
            "message": "User name is not provided."
        }, 400
    if not password:
        return {
            "status": "error",
            "message": "Password is not provided."
        }, 400
    user = DbUser.select().where(DbUser.username == username)
    if user.count() == 0:
        return {
            "status": "error",
            "message": "Invalid username or password."
        }
    user = user.get()
    if user.password != password:
        return {
            "status": "error",
            "message": "Invalid username or password."
        }
    session["uid"] = user.uid
    return {
        "status": "success",
        "data": {
            "uid": user.uid,
            "username": user.username,
        },
    }

@app.route("login", methods=["DELETE"])
def login_delete():
    session.clear()
    return { "status": "success" }

@app.route("users/<string:username>", methods=["HEAD"])
def users_head(username: str):
    user = DbUser.select().where(DbUser.username == username)
    return "", 200 if user.count() else 404

@app.route("users/<string:username>", methods=["GET"])
def users(username: str):
    user = DbUser.select().where(DbUser.username == username)
    if user.count() == 0:
        return "", 404
    user = user.get()
    return {
        "status": "success",
        "data": {
            "uid": user.uid,
            "username": user.username,
            "nickname": user.nickname,
        }
    }

@app.route("users", methods=["POST"])
def users_post():
    username = request.form.get("username")
    password = request.form.get("password")
    nickname = request.form.get("nickname")
    if not username:
        return {
            "status": "error",
            "message": "User name is not provided."
        }, 400
    if not password:
        return {
            "status": "error",
            "message": "Password is not provided."
        }, 400
    user = DbUser.select().where(DbUser.username == username)
    if user.count() > 0:
        return {
            "status": "error",
            "message": "User name is already taken."
        }
    user = DbUser.create(
        username = username,
        password = password,
        nickname = nickname if nickname else username,
    )
    return { "status": "success" }
