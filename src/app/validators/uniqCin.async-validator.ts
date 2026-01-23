import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { CvService } from "../cv/services/cv.service";

export function uniqCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      map(cvs => cvs.length ? {uniqCin: 'Le cin existe déjà'} : null)
    )
  };
}
