import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupsandsaladsComponent } from './soupsandsalads.component';

describe('SoupsandsaladsComponent', () => {
  let component: SoupsandsaladsComponent;
  let fixture: ComponentFixture<SoupsandsaladsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoupsandsaladsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupsandsaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
