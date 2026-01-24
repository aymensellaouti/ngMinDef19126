import { Component, inject, input, signal } from "@angular/core";
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
import { AutocompleteComponent } from "../autocomplete/autocomplete.component";



@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe, AutocompleteComponent],
})
export class DetailsCvComponent {
  toast = inject(ToastrService);
  authService = inject(AuthService);
  router = inject(Router);
  cvService = inject(CvService);

  // Old version
  // acr = inject(ActivatedRoute);
  // cvOldVersion = signal(this.acr.snapshot.data['cv']);

  // khater esta3melna with withComponentInputBinding fel
  // withComponentInputBinding
  // elle remplace l'utilisation de activatedRoute et snapshot
  cv = input.required<Cv>();
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
