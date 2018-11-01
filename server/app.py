from flask import Flask
from route.user import user
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.register_blueprint(user, url_prefix="/user")

@app.route('/')
def index():
  return "todo-list"

if __name__ == "__main__":
  app.run(host="0.0.0.0", threaded=True)
