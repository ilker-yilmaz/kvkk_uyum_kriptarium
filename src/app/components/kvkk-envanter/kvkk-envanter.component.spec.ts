import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkkEnvanterComponent } from './kvkk-envanter.component';

describe('KvkkEnvanterComponent', () => {
  let component: KvkkEnvanterComponent;
  let fixture: ComponentFixture<KvkkEnvanterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvkkEnvanterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvkkEnvanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
