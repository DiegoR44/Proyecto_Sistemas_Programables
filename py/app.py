from config import database as access
from Models import models as model


##with access.app.app_context():
  ##      access.db.create_all();
    ##    print("creado con exito")
def run():
    with access.app.app_context():
        access.db.create_all();
        print("creado con exito")


if __name__ == '__main__':
   # access.app.run(debug=True)
     run()