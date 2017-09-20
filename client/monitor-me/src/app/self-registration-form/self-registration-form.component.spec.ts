import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfRegistrationFormComponent } from './self-registration-form.component';

describe('SelfRegistrationFormComponent', () => {
  let component: SelfRegistrationFormComponent;
  let fixture: ComponentFixture<SelfRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
