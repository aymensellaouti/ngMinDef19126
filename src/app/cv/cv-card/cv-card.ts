import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  imports: [],
  templateUrl: './cv-card.html',
  styleUrl: './cv-card.css',
})
export class CvCard {
  cv = input<Cv | null>(null);
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    const cv = this.cv();
    if (cv) {
      if (this.embaucheService.embaucher(cv)) {
        this.toastr.success(`Le cv de ${cv.firstname} ${cv.name} a été embauché avec succès`)
      } else {
        this.toastr.warning(`Le cv de ${cv.firstname} ${cv.name} est déjà embauché`);
      }
    }
  }
}
