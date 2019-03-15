import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/components/custom-validators';

@Component({
  selector: 'app-reactive-custom-validations',
  templateUrl: './reactive-custom-validations.component.html',
  styleUrls: ['./reactive-custom-validations.component.scss']
})
export class ReactiveCustomValidationsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      constructivEmail: ['', [Validators.email, CustomValidators.constructivEmail]],
      tactaEmail: ['', [Validators.email, CustomValidators.domainEmail('tacta.io')]],
    });
  }

  submit() {
    this.form.markAsTouched();
    console.log(this.form);
  }
}
