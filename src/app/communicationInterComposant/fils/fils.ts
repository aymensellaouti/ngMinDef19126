import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  messageMenBaba = input("chay");

  messageElBaba = output<string>();
  messageElBaba2 = output<string[]>();

  sendMessage() {
    this.messageElBaba.emit("ok najem nkhali 3andi el  Ba9i")
    this.messageElBaba2.emit(["ok najem nkhali 3andi el  Ba9i"])
  }
}
