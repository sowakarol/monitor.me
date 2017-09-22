import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotMyPasswordButtonComponent } from './forgot-my-password-button.component';

describe('ForgotMyPasswordButtonComponent', () => {
  let component: ForgotMyPasswordButtonComponent;
  let fixture: ComponentFixture<ForgotMyPasswordButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotMyPasswordButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotMyPasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
