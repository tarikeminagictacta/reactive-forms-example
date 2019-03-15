import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  public static constructivEmail(control: AbstractControl): {[key: string]: any} | null  {
    return CustomValidators.domainEmail('constructiv.be')(control);
  }

  public static domainEmail(domain: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailValid = Validators.email(control) == null;
      if (control.value && emailValid && !control.value.toLowerCase().endsWith(`@${domain}`)) {
        return { domainEmail: true, expectedDomain: domain };
      }
      return null;
    };
  }

  public static get invalidStructureReference() {
    return { structuredReference: true };
  }

  public static get invalidUnstructuredReference() {
    return { unstructuredReference: true, unstructuredReferenceMaxLength: 35 };
  }

  public static referenceNumber(group: AbstractControl): { [key: string]: any } | null {
    const reference = group.get('reference');
    const structured = group.get('structured');

    if (reference == null || structured == null) {
      throw new Error('Cannot apply reference validation on this group');
    }

    if (reference.value) {
      if (structured.value) {
        const errors = Validators.pattern(/^\d{3}\/\d{4}\/\d{5}$/)(reference);
        return errors == null ? null : CustomValidators.invalidStructureReference;
      } else {
        const errors = Validators.maxLength(CustomValidators.invalidUnstructuredReference.unstructuredReferenceMaxLength)(reference);
        return errors == null ? null : CustomValidators.invalidUnstructuredReference;
      }
    }

    return null;
  }

}
