import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAmatorComponent } from './sign-up-amator.component';

describe('SignUpAmatorComponent', () => {
  let component: SignUpAmatorComponent;
  let fixture: ComponentFixture<SignUpAmatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAmatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAmatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
