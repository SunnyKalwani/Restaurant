import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginformComponent } from './admin-loginform.component';

describe('AdminLoginformComponent', () => {
  let component: AdminLoginformComponent;
  let fixture: ComponentFixture<AdminLoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
