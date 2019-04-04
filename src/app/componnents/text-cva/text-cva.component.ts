import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => TextCvaComponent),
  multi: true
};

@Component({
  selector: 'app-text-cva',
  templateUrl: './text-cva.component.html',
  styleUrls: ['./text-cva.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class TextCvaComponent implements ControlValueAccessor {
  private _value: string;
  private onTouched: Function;
  private onChange: Function;

  @Input() label: string;

  disabled: boolean;
  id: string = Math.random().toString(36).replace('0.', '');

  setValue(text: string) {
    this._value = text;
    this.onChange(this._value);
  }

  setTouched() {
    this.onTouched();
  }

  writeValue(obj: any): void {
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
    this.disabled = isDisabled;
  }
}
