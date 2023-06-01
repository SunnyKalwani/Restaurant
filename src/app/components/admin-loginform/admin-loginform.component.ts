import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-loginform',
  templateUrl: './admin-loginform.component.html',
  styleUrls: ['./admin-loginform.component.css']
})
export class AdminLoginformComponent {

  adminLogin;

  constructor(private formBuilder: FormBuilder,
    private router: Router){
    this.adminLogin = formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required,Validators.minLength(8)]],
    });
  }

  onSubmit(){
    console.log(this.adminLogin.value);
    this.adminLogin.reset();
    this.router.navigate(['/adminpage']);
  }

  get emailFormControl(){
    return this.adminLogin.get('email')!;
  }

  get passwordFormControl(){
    return this.adminLogin.get('password')!;
  }
}
