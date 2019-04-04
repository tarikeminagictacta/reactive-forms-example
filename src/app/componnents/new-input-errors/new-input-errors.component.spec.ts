import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInputErrorsComponent } from './new-input-errors.component';

describe('NewInputErrorsComponent', () => {
  let component: NewInputErrorsComponent;
  let fixture: ComponentFixture<NewInputErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInputErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInputErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
