import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApartmentComponentComponent } from './form-apartment-component.component';

describe('FormApartmentComponentComponent', () => {
  let component: FormApartmentComponentComponent;
  let fixture: ComponentFixture<FormApartmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormApartmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormApartmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
