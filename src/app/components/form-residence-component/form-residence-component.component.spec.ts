import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceComponentComponent } from './form-residence-component.component';

describe('FormResidenceComponentComponent', () => {
  let component: FormResidenceComponentComponent;
  let fixture: ComponentFixture<FormResidenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidenceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResidenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
