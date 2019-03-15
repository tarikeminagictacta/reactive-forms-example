import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { FormStatusComponent } from './components/form-status/form-status.component';
import { InputErrorsComponent } from './components/input-errors/input-errors.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import {
  ReactiveCrossFieldValidationComponent,
} from './containers/reactive-cross-field-validation/reactive-cross-field-validation.component';
import {
  ReactiveCustomValidationsComponent,
} from './containers/reactive-custom-validations/reactive-custom-validations.component';
import { ReactiveSimpleFormComponent } from './containers/reactive-simple-form/reactive-simple-form.component';
import { ReferenceInputComponent } from './components/reference-input/reference-input.component';
import { ReferenceInput2Component } from './components/reference-input2/reference-input2.component';
import { ReactiveConditionalValidationsComponent } from './containers/reactive-conditional-validations/reactive-conditional-validations.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveSimpleFormComponent,
    InputErrorsComponent,
    TextInputComponent,
    EmailInputComponent,
    ReactiveCustomValidationsComponent,
    FormStatusComponent,
    ReactiveCrossFieldValidationComponent,
    ReferenceInputComponent,
    ReferenceInput2Component,
    ReactiveConditionalValidationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    NgbModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
