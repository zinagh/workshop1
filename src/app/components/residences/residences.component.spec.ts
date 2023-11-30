import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencesComponent } from './residences.component';

describe('ResidencesComponent', () => {
  let component: ResidencesComponent;
  let fixture: ComponentFixture<ResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
