import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteEditComponent } from './add-delete-edit.component';

describe('AddDeleteEditComponent', () => {
  let component: AddDeleteEditComponent;
  let fixture: ComponentFixture<AddDeleteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeleteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
