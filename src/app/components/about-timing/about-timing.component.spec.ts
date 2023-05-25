import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTimingComponent } from './about-timing.component';

describe('AboutTimingComponent', () => {
  let component: AboutTimingComponent;
  let fixture: ComponentFixture<AboutTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
