import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageCinValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    // validation
    const cin = form.get('cin');
    let age = form.get('age');
    if (!age || !cin || cin?.invalid || age?.invalid) return null;
    const cinPortion = +cin?.value.substring(0,2);
    if ((+age.value >= 60 && cinPortion >= 20) || (+age.value < 60 && cinPortion < 20))
      return {ageCin: "L'age et le cin ne correspondent pas"}
    return null;
  };
}
