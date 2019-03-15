import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-form',
  templateUrl: './reactive-simple-form.component.html',
  styleUrls: ['./reactive-simple-form.component.scss']
})
export class ReactiveSimpleFormComponent implements OnInit {
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
}
