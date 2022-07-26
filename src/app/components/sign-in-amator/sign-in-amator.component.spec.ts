import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAmatorComponent } from './sign-in-amator.component';

describe('SignInAmatorComponent', () => {
  let component: SignInAmatorComponent;
  let fixture: ComponentFixture<SignInAmatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInAmatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAmatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
