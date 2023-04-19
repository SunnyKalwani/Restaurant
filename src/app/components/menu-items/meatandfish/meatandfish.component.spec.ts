import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatandfishComponent } from './meatandfish.component';

describe('MeatandfishComponent', () => {
  let component: MeatandfishComponent;
  let fixture: ComponentFixture<MeatandfishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatandfishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatandfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
