import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  title: string = "title";
  description: string = "description";
  dueDate: string = "2018-10-31";
  dueTime: string = "12:00 AM";
  top: number = 30;
  left: number = 30;
  x: number;
  y: number;
  pre_x: number;
  pre_y: number;
  isDown: boolean = false;
  extendedCardVisibility = "hidden";
  extendedCardTop: number;
  extendedCardLeft: number;
  @ViewChild("extendedCard") extendedCard;

  constructor() { }

  ngOnInit() {
  }

  mousedown(event) {
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
      this.extendCard();
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
  
  extendCard(){
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
  
  closeExtendedCard() {
    this.extendedCardVisibility = "hidden";
  }
  pickDate(event) {
    this.dueDate = event.getFullYear() + "-" + (event.getMonth() + 1) + "-" + event.getDate();
  }
  pickTime(event) {
    this.dueTime = event;
  }
}
