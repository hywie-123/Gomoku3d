from flask import *
app = Blueprint("api_v2", __name__, url_prefix="/api/v2")

from server.api.v2.users import app as api_v2_users;
app.register_blueprint(api_v2_users)
