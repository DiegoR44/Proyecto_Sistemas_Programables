from flask import Blueprint, render_template, request, jsonify,flash
from werkzeug.security import generate_password_hash, check_password_hash
from Models.models import Cliente_huellas
from utils.db import db
from flask_login import login_user
from pygame import mixer
import os,random
from playsound import playsound
  
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
        Huella = request.get_json(force=True)
        Cliente_pin = request.get_json(force=True)
        Nombre= request.get_json(force=True)
        
        if Huella.get("Huella") and Cliente_pin.get("Cliente_pin") and Nombre.get("Nombre")  is None:
            return jsonify({"message": "Bad request"}), 400
         
        User_validation = Cliente_huellas.query.filter_by(Cliente_pin=Cliente_pin.get("Cliente_pin")).first()
       
        if User_validation: # if a user is found, we want to redirect back to signup page so user can try again
           return jsonify({"message": "Registro existente"}), 400
       
        else:
            user_register = Cliente_huellas(
            Huella.get("Huella"),
            Cliente_pin.get("Cliente_pin"),
            Nombre.get("Nombre")
              )
              
            db.session.add(user_register)
            db.session.commit()
           
          
            return jsonify({"message": "Registro con exito"}), 201
           

    @recurso.route("/get_register", methods=["GET"])
    def get_register():
       user= Cliente_huellas.query.all()
       return Cliente_huellas.jsonify(user)
      

    @recurso.route("/auth", methods=["POST"])
    def login_cliente():
        Nombre = request.get_json(force=True)
        Cliente_pin = request.get_json(force=True)
    
        
        user = Cliente_huellas.query.filter_by(Cliente_pin=Cliente_pin.get("Cliente_pin")).first()
        
        if not user and not Nombre.get("Nombre"):
           return jsonify({"message": "usuario no encontrado"}), 400
        else:
            mixer.init()
            mixer.music.load("./bad-bunny-neverita-video-oficial-un-verano-sin-ti.mp3")
            mixer.music.set_volume(0.8)
            mixer.music.play()
            mixer.music.fadeout(26000)
        


            return jsonify({"message": "usuario encontrado"}), 201
