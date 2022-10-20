from config import database  as access
from sqlalchemy import Column, Integer, String, BINARY
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey
from flask import Flask
from flask_sqlalchemy import SQLAlchemy



class Cliente_Pines(access.db.Model):

     __tablename__ = 'Cliente_pin'
     
     id_pin=Column(Integer,primary_key=True,autoincrement=True)
     pinuser=Column(Integer,nullable=False)
     pin=access.db.relationship('Cliente_huella',backref='Cliente_pin')

     def __init__(self, xpinuser):
        self.pinuser =xpinuser
    
     def __repr__(self):
        return f'cliente_pin({self.pinuser})'
     
    
class Cliente_huella(access.db.Model):
    __tablename__ = 'Cliente_huella'

    id = Column(Integer, primary_key=True,autoincrement=True)
    Huella= Column(BINARY, nullable=False,unique=True)
    cliente_pin=Column(Integer,ForeignKey("Cliente_pin.id_pin"))
    
    def __init__(self, xHuella,xpincliente):
        self.Huella =xHuella
        self.cliente_pin=xpincliente
    def __repr__(self):
        return f'cliente_huella({self.Huella},{self.cliente_pin})'

    def __str__(self):
        return self.Huella,self.cliente_pin
    
