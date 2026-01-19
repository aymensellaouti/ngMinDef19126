import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  message = "Hello MD";
  isHidden = false;
  inputMessage = "";
  constructor() {
    // setInterval(() => {
    //   this.isHidden = !this.isHidden
    // }, 1000)
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.inputMessage = newMessage;
  }
}
