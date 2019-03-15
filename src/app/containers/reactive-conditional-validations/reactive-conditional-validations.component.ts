import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-conditional-validations',
  templateUrl: './reactive-conditional-validations.component.html',
  styleUrls: ['./reactive-conditional-validations.component.scss']
})
export class ReactiveConditionalValidationsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      reference: '',
      structured: false
    });
  }

  submit() {
    console.log(this.form);
  }

}
