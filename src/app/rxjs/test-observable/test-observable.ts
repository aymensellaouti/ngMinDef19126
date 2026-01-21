import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  imports: [AsyncPipe],
  templateUrl: './test-observable.html',
  styleUrl: './test-observable.css',
})
export class TestObservable {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
 // counter = signal(0);
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
  //  setTimeout(() => {
      this.myObservable$.subscribe({
        next: (val) => {
          console.log(val);
        },
      });
      // this.myObservable$.subscribe({
      //   next: (val) => {
      //     this.counter.set(val);
      //   },
      // });
  //  }, 3000)
    this.myObservable$
    .pipe(
      // 5 4 3 2 1
      map(valeurJdidaTji => valeurJdidaTji * 3),
      // 15 12 9 6 3
      filter(x => x % 2 == 0)
      // 12 6
    )
    .subscribe({
      next: (val) => {
        this.toastr.info('' + val);
      },
      complete: () => {
        this.toastr.error('BOOOOOM !!!!!')
      }
    });
  }
}
