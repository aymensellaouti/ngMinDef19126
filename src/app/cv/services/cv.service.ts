import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', 'rotating_card_profile3.png', 42),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', 'rotating_card_profile2.png', 5),
  ]);

  #selectedCv = signal<Cv | null>(null);
  /**
   * Retourne la liste des cvs
   * @returns Signal<Cv[]>
   */
  getCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }

  /**
   * Retourne le signal représentant le cv séléctionné
   *
   * @returns signal<Cv>
   */
  getSelectedCv() {
    return this.#selectedCv.asReadonly();
  }
  /**
   * Permet de sélectionner un cv
   *
   * @param cv : le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
