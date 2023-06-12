import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-loginform',
  templateUrl: './admin-loginform.component.html',
  styleUrls: ['./admin-loginform.component.css']
})
export class AdminLoginformComponent {

  adminLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private adminService: AdminService, private router: Router) {
    this.adminLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    let formData = this.adminLogin.value;

    this.adminService.loginAdmin(formData).subscribe({
      next: (result) => {
        localStorage.setItem("currentAdmin", JSON.stringify(result)); //Store the user data on our browser
        alert("Login was successful");
        this.router.navigate(['/adminpage']);

      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      }
    });
  }

  get emailFormControl() {
    return this.adminLogin.get('email')!;
  }

  get passwordFormControl() {
    return this.adminLogin.get('password')!;
  }
}
