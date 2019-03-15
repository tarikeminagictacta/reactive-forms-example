import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-reference-input',
  templateUrl: './reference-input.component.html',
  styleUrls: ['./reference-input.component.scss']
})
export class ReferenceInputComponent {

  @Input()
  parentGroup: FormGroup;

  @Input()
  label: string;

  get referenceInvalid() {
    return this.parentGroup.get('reference') && this.parentGroup.get('reference').invalid;
  }

  get invalid(): any {
    return this.parentGroup.hasError('structuredReference')
      || this.parentGroup.hasError('unstructuredReference')
      || this.referenceInvalid;
  }

  get touched() {
    return this.parentGroup.get('reference') && this.parentGroup.get('reference').touched;
  }

  get errors() {
    let errors = Object.assign({}, this.parentGroup.get('reference').errors);
    if (this.parentGroup.hasError('structuredReference')) {
      errors = Object.assign(errors, CustomValidators.invalidStructureReference);
    }
    if (this.parentGroup.hasError('unstructuredReference')) {
      errors = Object.assign(errors, CustomValidators.invalidUnstructuredReference);
    }
    return this.invalid ? errors : null;
  }

  get labelText(): string {
    return this.label;
  }
}
