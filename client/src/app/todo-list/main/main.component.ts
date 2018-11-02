import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  maxzIndex: number = 2;
  id: number = 0;
  todos = []; 
  constructor() { }

  ngOnInit() {
  }

  newTodo(event) {
    let left = event.x;
    if(event.x + 650 > window.innerWidth) {
      left -= event.x + 650 - window.innerWidth;
    }
    this.todos.push(new Todo(this.id, left, event.y, this.maxzIndex));
    this.maxzIndex += 1;
    this.id += 1;
  }
  clickTodo() {
    this.maxzIndex += 1;
  }
}

class Todo {
  title: string;
  description: string;
  dueTime: string;
  dueDate: string;
  left: number;
  top: number;
  zIndex: number;
  id: number;
  constructor(id: number, left:number, top: number, zIndex: number) {
    this.id = id;
    this.left = left;
    this.top = top;
    this.zIndex = zIndex;
  }
}

