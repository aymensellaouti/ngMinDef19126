import { Component, inject, OnDestroy } from "@angular/core";
import { FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from "@angular/forms";
import { APP_CONSTANES } from "../../config/constantes";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { APP_ROUTES } from "../../config/app.routes";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { uniqCinValidator } from "../../validators/uniqCin.async-validator";
import { ageCinValidator } from "../../validators/ageCin.validator";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
  imports: [ReactiveFormsModule],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);

  form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqCinValidator(this.cvService)],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    {
      validators: [ageCinValidator()],
      asyncValidators: [],
      updateOn: 'change',
    },
  );
  constructor() {
    const savedForm = localStorage.getItem(APP_CONSTANES.savedAddCvForm);
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
    this.age.valueChanges.pipe(takeUntilDestroyed()).subscribe({
      next: (age) => {
        if (age < 18) {
          this.path?.disable();
          this.path?.setValue('');
        } else this.path?.enable();
      },
    });
  }

  addCv() {
    this.cvService
      .addCv(this.form.getRawValue() as Cv)
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (cv) => {
          localStorage.removeItem(APP_CONSTANES.savedAddCvForm);
          this.form.reset();
          this.router.navigate([APP_ROUTES.cv]);
        },
      });
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(APP_CONSTANES.savedAddCvForm, JSON?.stringify(this.form.value));
    }
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
