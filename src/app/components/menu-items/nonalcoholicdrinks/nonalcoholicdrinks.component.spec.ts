import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonalcoholicdrinksComponent } from './nonalcoholicdrinks.component';

describe('NonalcoholicdrinksComponent', () => {
  let component: NonalcoholicdrinksComponent;
  let fixture: ComponentFixture<NonalcoholicdrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonalcoholicdrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonalcoholicdrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
