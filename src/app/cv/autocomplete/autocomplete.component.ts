import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Observable,  Subscription, switchMap } from "rxjs";
import { Cv } from "../model/cv";
import { CvList } from "../cv-list/cv-list";
import { AsyncPipe } from "@angular/common";
import { CvService } from "../services/cv.service";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  imports: [ReactiveFormsModule, CvList, AsyncPipe]
})
export class AutocompleteComponent {
  form!: FormGroup;
  cvs$!: Observable<Cv[]>;
  cvService = inject(CvService);
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl(
      '',{
      }
    ) });
    const nameInput = this.form.controls['name'];
    this.cvs$ = nameInput.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(nameJdid => this.cvService.getCvsByName(nameJdid)),
    )

  }
}
