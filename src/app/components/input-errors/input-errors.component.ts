import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss']
})
export class InputErrorsComponent {

  @Input()
  showErrors = false;

  @Input()
  errors: any;

}
