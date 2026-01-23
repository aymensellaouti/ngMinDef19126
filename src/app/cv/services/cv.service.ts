import {  inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { APP_API } from '../../config/app.api';
import { HttpClient, HttpHeaders, HttpParams, httpResource } from '@angular/common/http';
import { APP_CONSTANES } from '../../config/constantes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 42),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', 'rotating_card_profile2.png', 5),
  ]);

  #selectedCv = signal<Cv | null>(null);
  http = inject(HttpClient);
  selectedCvSubject = new Subject<Cv>();
  /**
   * Retourne la liste des cvs
   * @returns Signal<Cv[]>
   */
  getFakeCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }
  /**
   * Retourne l'observable de la liste des cvs
   * @returns Observable<Cv[]>
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   * Retourne l'observable du cv par son id
   * @param id: l'id du cv recherché
   * @returns Observable<Cv>
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   * Permet de supprimer un cv par son id
   * @param id: l'id du cv à supprimer
   * @returns Observable<{count: number}>
   */
  deleteCvById(id: number): Observable<{ count: number }> {
    //const params = new HttpParams().set(APP_CONSTANES.loginHttpParam, localStorage.getItem(APP_CONSTANES.token) ?? '')
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const length = this.#cvs().length;
    this.#cvs.update((cvs) => cvs.filter((actualCv) => cv != actualCv));
    return length != this.#cvs().length;
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
  selectCv(cv: Cv | null) {
    this.#selectedCv.set(cv);
    if (cv) this.selectedCvSubject.next(cv);
  }

  getCvsByName(name: string): Observable<Cv[]> {
    const params = new HttpParams().set('filter', `{"where":{"name":{"like":"%${name}%"}}}`);
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }
  getCvsByProperty(property: string, value: string): Observable<Cv[]> {
    const params = new HttpParams().set('filter', `{"where":{"${property}":"${value}"}}`);
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }
  addCv(cv: Cv): Observable<Cv> {
    if (!cv.path) {
      cv.path = '';
    }
    return this.http.post<Cv>(APP_API.cv, cv);
  }

  getCvByIdResource(id: Signal<number>) {
    return httpResource(() => APP_API.cv + id());
  }
}
