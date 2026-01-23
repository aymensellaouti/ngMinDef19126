import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Observable,  Subscription } from "rxjs";
import { Cv } from "../model/cv";
import { CvList } from "../cv-list/cv-list";
import { AsyncPipe } from "@angular/common";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  imports: [ReactiveFormsModule, CvList, AsyncPipe]
})
export class AutocompleteComponent {
  form!: FormGroup;
  cvs$!: Observable<Cv[]>;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl() });
    const nameInput = this.form.controls['name'];
  }
}
