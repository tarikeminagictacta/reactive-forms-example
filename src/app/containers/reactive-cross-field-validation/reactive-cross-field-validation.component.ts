import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/components/custom-validators';

@Component({
  selector: 'app-reactive-cross-field-validation',
  templateUrl: './reactive-cross-field-validation.component.html',
  styleUrls: ['./reactive-cross-field-validation.component.scss']
})
export class ReactiveCrossFieldValidationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      reference: '',
      structured: false
    }, { validators: [CustomValidators.referenceNumber]});
  }

  submit() {
    console.log(this.form);
  }

}
