import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAuth0Component } from './sign-in-auth0.component';

describe('SignInAuth0Component', () => {
  let component: SignInAuth0Component;
  let fixture: ComponentFixture<SignInAuth0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInAuth0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
