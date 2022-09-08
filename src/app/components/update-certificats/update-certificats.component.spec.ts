import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCertificatsComponent } from './update-certificats.component';

describe('UpdateCertificatsComponent', () => {
  let component: UpdateCertificatsComponent;
  let fixture: ComponentFixture<UpdateCertificatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCertificatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
