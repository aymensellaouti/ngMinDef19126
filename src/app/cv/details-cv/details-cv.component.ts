import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app.routes";
import { DefaultImagePipe } from "../pipes/default-image-pipe";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/services/auth-service";
import { catchError, EMPTY, tap } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";



@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe, AsyncPipe],
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  router = inject(Router);
  toast = inject(ToastrService);
  authService = inject(AuthService);
  cvService = inject(CvService);
  id = this.acr.snapshot.params['id'];
  cv$ = this.cvService.getCvById(this.id).pipe(
    catchError((e) => {
      this.router.navigate([APP_ROUTES.cv]);
      return EMPTY;
    }),
  );
  cv = toSignal(this.cv$, {initialValue: null});
  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // this.cvService.getCvById(id).subscribe({
    //   next: (cv) => this.cv.set(cv),
    //   error: (e) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   },
    // });
  }
  deleteCv() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvById(cv.id).subscribe({
        next: (data) => {
          this.cvService.selectCv(null);
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toast.error(`un problème est survenue merci de contacter l'admin`);
        },
      });
    }
  }
}
