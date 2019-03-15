import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ReactiveCrossFieldValidationComponent,
} from './containers/reactive-cross-field-validation/reactive-cross-field-validation.component';
import {
  ReactiveCustomValidationsComponent,
} from './containers/reactive-custom-validations/reactive-custom-validations.component';
import { ReactiveSimpleFormComponent } from './containers/reactive-simple-form/reactive-simple-form.component';

const routes: Routes = [
  { path: 'simple', component: ReactiveSimpleFormComponent },
  { path: 'custom', component: ReactiveCustomValidationsComponent },
  { path: 'crossField', component: ReactiveCrossFieldValidationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
