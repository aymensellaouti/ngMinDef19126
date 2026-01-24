import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageCinValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    // validation
    return null
  };
}
