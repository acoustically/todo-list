import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  inputs:["title", "description", "dueDate", "index", "dueTime", "left", "top", "todoId", "maxzIndex"],
})
export class TodoCardComponent implements OnInit {
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  top: number;
  left: number;
  todoId: number;
  index: number;
  x: number;
  y: number;
  pre_x: number;
  pre_y: number;
  isDown: boolean = false;
  maxzIndex: number;
  extendedCardVisibility = "hidden";
  extendedCardTop: number;
  extendedCardLeft: number;
  @ViewChild("extendedCard") extendedCard;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  mousedown(event) {
    this.index = this.maxzIndex;
    event.stopPropagation();
    this.x = event.x;
    this.y = event.y;
    this.pre_x = event.x;
    this.pre_y = event.y;
    if(this.extendedCardVisibility == "hidden") {
      this.isDown = true;
    }
  }

  mouseup(event) {
    this.isDown = false;
    if(event.x == this.pre_x && event.y == this.pre_y) {
      this.extendCard(event);
    }
    this.pre_x = event.x;
    this.pre_y = event.y;
  }

  mousemove(event) {
    if(this.isDown) {
      this.left += event.x - this.x;
      this.top += event.y - this.y;
      this.x = event.x;
      this.y = event.y;
    }
  }
  
  extendCard(event){
    event.stopPropagation();
    this.extendedCardVisibility = "visible";
    this.extendedCardLeft = this.left + 310;
    this.extendedCardTop = this.top;
    if(this.extendedCardTop + 500 > window.innerHeight) {
      this.extendedCardTop -= this.top + 500 - window.innerHeight;
    }
    if(this.extendedCardLeft + 500 > window.innerWidth) {
      this.extendedCardLeft = this.left - 500;
    }
  }

  clickExtendedCard(event) {
    event.stopPropagation();
  }
  
  closeExtendedCard(event) {
    event.stopPropagation();
    this.extendedCardVisibility = "hidden";
    let todo = {
        "email": sessionStorage["email"],
        "id": this.todoId,
        "todo": this.title,
        "description": this.description,
        "due_date": this.dueDate,
        "due_time": this.dueTime,
        "left": this.left,
        "top": this.top,
        "z_index": this.index,
    }
    this.http.post("http://localhost:5000/todo/new", todo).subscribe(result => {
      alert("result");
    }, err => {
      alert(err);
    });
  }
  pickDate(event) {
    this.dueDate = event.getFullYear() + "-" + (event.getMonth() + 1) + "-" + event.getDate();
  }
  pickTime(event) {
    this.dueTime = event;
  }
}
