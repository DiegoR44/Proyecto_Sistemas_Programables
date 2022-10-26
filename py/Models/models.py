from flask_login import UserMixin
from utils.db import db

from sqlalchemy import Column, Integer, BLOB,String

class Cliente_huellas(UserMixin,db.Model):

    __tablename__ = 'Cliente_huella'

    id = Column(Integer, primary_key=True,autoincrement=True)
    Huella= Column(Integer)
    Cliente_pin=Column(String(100))
    
    def __init__(self, xHuella,xpincliente): ##constructor
        self.Huella =xHuella
        self.Cliente_pin=xpincliente

    def __repr__(self):
        return f'cliente_huella({self.Huella},{self.Cliente_pin})'

    def __str__(self):
        return self.Huella,self.Cliente_pin

    def serialize(self):
        return {
                "Huella": self.Huella,
                "Cliente pin": self.Cliente_pin}
    
    

