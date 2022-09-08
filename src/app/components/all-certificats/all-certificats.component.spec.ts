import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCertificatsComponent } from './all-certificats.component';

describe('AllCertificatsComponent', () => {
  let component: AllCertificatsComponent;
  let fixture: ComponentFixture<AllCertificatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCertificatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
