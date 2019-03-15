import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export class BaseInput {
  @Input()
  parentGroup: FormGroup;

  @Input()
  controlName: string;

  @Input()
  label: string;

  get control(): FormControl {
    return this.parentGroup.get(this.controlName) as FormControl;
  }

  get touched(): boolean {
    return this.control.touched;
  }

  get errors(): any {
    return this.control.errors;
  }

  get invalid(): any {
    return this.control.invalid && this.touched;
  }

  get labelText(): string {
    return this.label;
  }
}
