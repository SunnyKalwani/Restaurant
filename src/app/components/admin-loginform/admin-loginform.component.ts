import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-loginform',
  templateUrl: './admin-loginform.component.html',
  styleUrls: ['./admin-loginform.component.css']
})
export class AdminLoginformComponent {

  adminLogin;

  constructor(private formBuilder: FormBuilder){
    this.adminLogin = formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required,Validators.minLength(8)]],
    });
  }

  onSubmit(){
    console.log(this.adminLogin.value);
    this.adminLogin.reset();
  }

  get emailFormControl(){
    return this.adminLogin.get('email')!;
  }

  get passwordFormControl(){
    return this.adminLogin.get('password')!;
  }
}
