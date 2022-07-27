import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriGirisComponent } from './veri-giris.component';

describe('VeriGirisComponent', () => {
  let component: VeriGirisComponent;
  let fixture: ComponentFixture<VeriGirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeriGirisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
