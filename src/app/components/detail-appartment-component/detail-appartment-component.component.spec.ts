import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppartmentComponentComponent } from './detail-appartment-component.component';

describe('DetailAppartmentComponentComponent', () => {
  let component: DetailAppartmentComponentComponent;
  let fixture: ComponentFixture<DetailAppartmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAppartmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAppartmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
