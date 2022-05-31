import server.db

from flask import *

app = Flask(__name__,
    static_url_path='/static/', 
    static_folder='../web/public/',)

app.secret_key = 'secret'

@app.route("/", methods=["GET"])
def index():
    return send_from_directory(app.static_folder, "index.html")

from server.api.v2 import app as api_v2;
app.register_blueprint(api_v2)
