import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalYearComponent } from './statistical-year.component';

describe('StatisticalYearComponent', () => {
  let component: StatisticalYearComponent;
  let fixture: ComponentFixture<StatisticalYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
