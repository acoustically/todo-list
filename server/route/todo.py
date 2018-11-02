from flask import Blueprint, jsonify, request
from mongo import Mongo

todo= Blueprint('todo', __name__)
users = Mongo.db("user")


@todo.route("/new", methods=["POST"])
def new():
  json = request.json
  email = json["email"]
  todo_id = json["id"]
  todo = json["todo"]
  description = json["description"]
  due_date = json["due_date"]
  due_time = json["due_time"]
  left = json["left"]
  top = json["top"]
  z_index = json["z_index"]
  '''
  '''
  users.update(
    { "email": email },
    {
      "$pull": {
        "todos": {
          "todo_id": todo_id
        }
      }
    })
  users.update(
    { "email": email },
    { 
      "$push" : {
        "todos": {
          "todo_id": todo_id,
          "todo": todo,
          "description": description,
          "due_date": due_date,
          "due_time": due_time,
          "left": left,
          "top": top,
          "z_index": z_index
        }
      }
    })
  return "test"
