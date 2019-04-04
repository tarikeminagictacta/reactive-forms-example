import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCvaComponent } from './text-cva.component';

describe('TextCvaComponent', () => {
  let component: TextCvaComponent;
  let fixture: ComponentFixture<TextCvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
