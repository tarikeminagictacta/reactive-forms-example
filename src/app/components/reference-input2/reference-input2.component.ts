import { Component } from '@angular/core';

import { BaseInput } from '../base-input';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-reference-input2',
  templateUrl: './reference-input2.component.html',
  styleUrls: ['./reference-input2.component.scss']
})
export class ReferenceInput2Component extends BaseInput {
  constructor() {
    super();
    this.parentGroup.get('structured').valueChanges.subscribe((isStructured: boolean) => {
      const validators = isStructured
        ? CustomValidators.structuredReferenceNumber
        : CustomValidators.unstructuredReferenceNumber;
      this.control.setValidators(validators);
    });
  }
}
