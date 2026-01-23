import { Injectable, inject, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { APP_API } from "../../config/app.api";


@Injectable({
  providedIn: 'root',
})
export class FakeCvService {
  private http = inject(HttpClient);

  private cvs: Cv[] = [];
  #selectedCv = signal<Cv | null>(null);
  constructor() {
    this.cvs = [
      new Cv(1, 'aymen', 'sellaouti', 'teacher', 'as.jpg', '1234', 40),
      new Cv(2, 'skander', 'sellaouti', 'enfant', '       ', '1234', 4),
    ];
  }

  /**
   *
   * Retourne un liste fictive de cvs
   *
   * @returns CV[]
   *
   */
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Retourne la liste des cvs de l'API
   *
   * @returns CV[]
   *
   */
  getCvs(): Observable<Cv[]> {
    return of(this.getFakeCvs());
  }

  /**
   *
   * supprime un cv par son id de l'API
   *
   * @param id: number
   * @returns CV[]
   *
   */
  deleteCvById(id: number): Observable<any> {
    return this.http.delete<any>(APP_API.cv + id);
  }

  addCv(cv: Cv): Observable<Cv> {
    return this.http.post<any>(APP_API.cv, cv);
  }

  /**
   *
   * Retourne un cv par son id de l'API
   *
   * @param id: number
   * @returns CV[]
   *
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Recherche les cvs dont le name contient la chaine name passée en paramètre
   * @param name : string
   * @returns cvs Cv[]
   */
  selectByName(name: string) {
    const search = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', search);
    return this.http.get<any>(APP_API.cv, { params });
  }
  /**
   * Recherche les cvs dont la valeur est égale à la chaine passée en paramètre
   * @param property : string, la propriété sur laquelle on va requeter
   * @param value : string, la valeur de la propriété sur laquelle on va requeter
   * @returns cvs Cv[]
   */
  selectByProperty(property: string, value: string) {
    const search = `{"where":{"${property}":"${value}"}}`;
    const params = new HttpParams().set('filter', search);
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }
  /**
   * Retourne le signal représentant le cv séléctionné
   *
   * @returns signal<Cv>
   */
  getSelectedCv() {
    return this.#selectedCv.asReadonly();
  }
}
