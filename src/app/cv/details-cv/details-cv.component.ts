import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app.routes";
import { DefaultImagePipe } from "../pipes/default-image-pipe";



@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv.set(this.cvService.findCvById(id));
    if (!this.cv()) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
  deleteCv() {
    const cv = this.cv();
    if (cv){
      this.cvService.deleteCv(cv);
      if (this.cvService.getSelectedCv()() == cv) {
        this.cvService.selectCv(null);
      }
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
