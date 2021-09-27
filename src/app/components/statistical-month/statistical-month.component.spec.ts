import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalMonthComponent } from './statistical-month.component';

describe('StatisticalMonthComponent', () => {
  let component: StatisticalMonthComponent;
  let fixture: ComponentFixture<StatisticalMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
