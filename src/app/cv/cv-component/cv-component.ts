import { Component, inject, input, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2usdPipe } from '../../pipes/btc2usd-pipe';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/sayHello.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";
import { catchError, of, tap } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard, CurrencyPipe, DatePipe, Btc2usdPipe, UpperCasePipe, EmbaucheComponent],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  today = new Date();
  logger = inject(LoggerService);
  //ts = inject(TodoService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);

  selectedCv = this.cvService.getSelectedCv();
  sayHelloService = inject(SayHelloService);
  cvs$ = this.cvService.getCvs().pipe(
    catchError((e) => {
      this.toastr.error(
        `Une erreur est survenue les données sont fictives merci de contacter l'admin`,
      );
      return of(this.cvService.getFakeCvs()());
    }),
  );
  //cvs = toSignal(this.cvs$, {initialValue: []});
  cvsResource = rxResource({
    //params: () => {},
    defaultValue: [],
    stream: () => this.cvs$,
  });
  constructor() {
    this.logger.log('je suis le cvComponennt');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu MD');
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs.set(cvs);
    //   },
    //   error: (e) => {
    //     this.cvs.set(this.cvService.getFakeCvs()());
    //     this.toastr.error(`Une erreur est survenue les données sont fictives merci de contacter l'admin`)
    //   },
    // })
  }
}
