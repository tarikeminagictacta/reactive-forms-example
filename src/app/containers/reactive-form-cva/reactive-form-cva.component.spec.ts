import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCvaComponent } from './reactive-form-cva.component';

describe('ReactiveFormCvaComponent', () => {
  let component: ReactiveFormCvaComponent;
  let fixture: ComponentFixture<ReactiveFormCvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormCvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
