from flask import Blueprint, render_template, request, jsonify,flash
from werkzeug.security import generate_password_hash, check_password_hash
from Models.models import Cliente_huellas
from utils.db import db
from flask_login import login_user

recurso = Blueprint("resources", __name__)
class Pines:
    @recurso.route("/")
    def home():
        return render_template("welcome.html")

    @recurso.route("/to_register")
    def to_register():
        return render_template("registro.html")

    @recurso.route("/new_register", methods=["POST"])
    def new_register():
        Huella = request.form.get('Huella')
        Cliente_pin = request.form.get('Cliente_pin')
        Nombre= request.form.get('Nombre')
        
        if Huella and Cliente_pin and Nombre  is None:
            return jsonify({"message": "Bad request"}), 400
         
        User_validation = Cliente_huellas.query.filter_by(Cliente_pin=Cliente_pin).first()
        
        if User_validation: # if a user is found, we want to redirect back to signup page so user can try again
            flash('Email address already exists')
            return render_template("welcome.html")

        user_register = Cliente_huellas(
            Huella=Huella, 
            Cliente_pin=Cliente_pin,
            Nombre=Nombre,
        )
        
        db.session.add(user_register)
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
          return "revisa tus credenciales"
            
        else:
           return render_template("welcome.html")

