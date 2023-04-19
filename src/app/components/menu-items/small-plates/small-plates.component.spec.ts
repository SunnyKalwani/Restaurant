import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPlatesComponent } from './small-plates.component';

describe('SmallPlatesComponent', () => {
  let component: SmallPlatesComponent;
  let fixture: ComponentFixture<SmallPlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallPlatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
