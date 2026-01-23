import { Component } from '@angular/core';
import { Second } from "../second/second";
import { interval, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-first',
  imports: [Second, AsyncPipe],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  message = "Hello MD";
  isHidden = false;
  inputMessage = "";
  interval$ = interval(1000).pipe(
    tap(val => console.log(val))
  );
  constructor() {
    // setInterval(() => {
    //   this.isHidden = !this.isHidden
    // }, 1000)
    // this.interval$.subscribe({
    //   next: val => console.log(val)
    // })
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.inputMessage = newMessage;
  }
}
