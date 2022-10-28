from flask import Blueprint, render_template, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from Models.models import Cliente_huellas
from utils.db import db
from flask_login import login_user

recurso = Blueprint("resources", __name__)


class Pines:
    @recurso.route("/")
    def home():
        return render_template("welcome.html")

    @recurso.route("/new_register", methods=["POST"])
    def new_register():
        Huella = request.get_json(force=True)
        Pin_cliente = request.get_json(force=True)

        if Huella.get("Huella") and Pin_cliente.get("Cliente_pin") is None:
            return jsonify({"message": "Bad request"}), 400

        user = Cliente_huellas(
           
            Huella["Huella"], 
            Pin_cliente["Cliente_pin"]
        )
        db.session.add(user)
        db.session.commit()
        return "registro hecho"



    @recurso.route("/get_register", methods=["GET"])
    def get_register():
        users = Cliente_huellas.query.all()
        return jsonify(users.serialize())

    @recurso.route("/auth", methods=["POST"])
    def login_cliente():
        Huella = request.get_json(force=True)
        Pin_cliente = request.get_json(force=True)
        
        user = Cliente_huellas.query.filter_by(Cliente_pin=Pin_cliente["Cliente_pin"]).first()
     
        if not user or not Huella["Huella"]:
            print("revisa tus credenciales")
            
        else:
           return render_template("welcome.html")

