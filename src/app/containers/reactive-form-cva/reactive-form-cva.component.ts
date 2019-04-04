import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-cva',
  templateUrl: './reactive-form-cva.component.html',
  styleUrls: ['./reactive-form-cva.component.scss']
})
export class ReactiveFormCvaComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]]
    });
  }

  submit() {
    console.log(this.form);
  }

  getErrors(controlName: string) {
    return this.form.get(controlName).errors;
  }
}
