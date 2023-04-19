import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicdrinksComponent } from './alcoholicdrinks.component';

describe('AlcoholicdrinksComponent', () => {
  let component: AlcoholicdrinksComponent;
  let fixture: ComponentFixture<AlcoholicdrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholicdrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholicdrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
