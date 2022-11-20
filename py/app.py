from flask import Flask
from flask_cors import CORS
from routes.resources import recurso

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Cliente_huellas.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

app.register_blueprint(recurso)


