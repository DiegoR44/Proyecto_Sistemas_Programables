from flask_login import UserMixin
from utils.db import db

from sqlalchemy import Column, Integer,BLOB,String

class Cliente_huellas(UserMixin,db.Model):

    __tablename__ = 'Cliente_huella'

    id = Column(Integer, primary_key=True,autoincrement=True)
    Huella= Column(BLOB,unique=True)
    Cliente_pin=Column(Integer,unique=True)
    Nombre=Column(String(80))
    
    def __init__(self, huella,cliente_Pin,nombre):##constructor
        self.Huella=huella
        self.Cliente_pin=cliente_Pin
        self.Nombre=nombre

    def __repr__(self):
        return f'cliente_huella({self.Huella},{self.Cliente_pin},{self.Nombre})'

    def __str__(self):
        return self.Huella,self.Cliente_pin,self.Nombre

    def serialize(self):
        return {
                "Huella": self.Huella,
                "Cliente pin": self.Cliente_pin,
                "Nombre": self.Nombre
                }
    
    


