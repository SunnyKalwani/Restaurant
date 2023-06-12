import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-register-form',
  templateUrl: './admin-register-form.component.html',
  styleUrls: ['./admin-register-form.component.css']
})
export class AdminRegisterFormComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService){
    this.registerForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register(){
    let formData = this.registerForm.value;

    this.adminService.registerAdmin(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('User was created successfully');
      },
      error: (err) => {
        console.log(err);
        alert(err);
      }
    });
  }

  get emailFormControl() {
    return this.registerForm.get('email')!;
  }

  get passwordFormControl() {
    return this.registerForm.get('password')!;
  }

  get first_nameFormControl() {
    return this.registerForm.get('first_name')!;
  }

  get last_nameFormControl() {
    return this.registerForm.get('last_name')!;
  }

}
