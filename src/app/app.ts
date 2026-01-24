import { Component, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { CdPereComponent } from "./cdOnPushExample/cd-pere/cd-pere.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NgxUiLoaderModule, CdPereComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  //state
  protected readonly title = signal('ngMinDef19126');
  ngxService = inject(NgxUiLoaderService);
  router = inject(Router);
  constructor() {
    // this.router.events.subscribe({
    //   next: (event) => {
    //     if ( event instanceof NavigationStart) {
    //       this.ngxService.start();
    //     }
    //     if (
    //       event instanceof NavigationEnd ||
    //       event instanceof NavigationError ||
    //       event instanceof NavigationCancel
    //     ) {
    //       this.ngxService.stop();
    //     }
    //   }
    // })
  }

}
