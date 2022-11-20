
from app import app
from flask_login import LoginManager
from Models.models import Cliente_huellas
from utils.db import db


def run():
    db.init_app(app)
    with app.app_context():
         #db.create_all()
         app.run(debug=True)

    
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)
    @login_manager.user_loader
    
    def load_user(id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
            print("me ejecuto")
            return Cliente_huellas.query.get(int(id))


if __name__ == '__main__':
    
      run()
      
