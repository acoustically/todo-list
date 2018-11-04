import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-card',
  templateUrl: './todo-list-card.component.html',
  styleUrls: ['./todo-list-card.component.scss'],
  inputs: ["todo", "onDrag", "index"],
})
export class TodoListCardComponent implements OnInit {
  onDrag: boolean
  todo;
  title;
  index;
  @ViewChild("card") card;
  @Output() mouseDownCard = new EventEmitter();
  @Output() mouseOnCard = new EventEmitter();
  @Output() mouseUpCard = new EventEmitter();
  isSelected: boolean = false;
  constructor() { }

  ngOnInit() {
    this.title = this.todo.title;
  }
  
  mousedown(event) {
    this.card.nativeElement.style.backgroundColor = "#D7C7C8";
    let card = {
      "todo": this.todo,
      "top" : this.card.nativeElement.getBoundingClientRect().top,
      "x" : event.x,
      "y" : event.y,
      "index":this.index
    }
    this.mouseDownCard.emit(card);
    this.title = "　";
    this.isSelected = true;
  }

  mousemove(event) {
    if(this.onDrag && !this.isSelected) {
      let rect = this.card.nativeElement.getBoundingClientRect();
      if(event.x < rect.right && event.y < rect.bottom - 20 && event.x > rect.left && event.y > rect.top + 20) {
        let card = {
          "todo": this.todo,
          "index": this.index
        }
        this.mouseOnCard.emit(card);
      }
    }
  }
  mouseup() {
    if(this.onDrag && this.isSelected) {
      this.mouseUpCard.emit();
      this.title = this.todo.title;
      this.onDrag = false;
      this.isSelected = false;
      this.card.nativeElement.style.backgroundColor = "#F0EEE7";
    }
  }
}
