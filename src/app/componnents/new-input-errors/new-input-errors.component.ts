import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-input-errors',
  templateUrl: './new-input-errors.component.html',
  styleUrls: ['./new-input-errors.component.scss']
})
export class NewInputErrorsComponent {

  @Input() errors: any;

  get errorKeys() {
    return Object.keys(this.errors);
  }

}
