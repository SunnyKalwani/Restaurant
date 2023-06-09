import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterFormComponent } from './admin-register-form.component';

describe('AdminRegisterFormComponent', () => {
  let component: AdminRegisterFormComponent;
  let fixture: ComponentFixture<AdminRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
