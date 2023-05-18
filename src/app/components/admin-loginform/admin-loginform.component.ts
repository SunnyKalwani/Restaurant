import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-loginform',
  templateUrl: './admin-loginform.component.html',
  styleUrls: ['./admin-loginform.component.css']
})
export class AdminLoginformComponent {

  adminLogin;

  constructor(private formBuilder: FormBuilder){
    this.adminLogin = formBuilder.group({
      email:[],
      password:[],
    });

  }

  onSubmit(){
    console.log(this.adminLogin.value);
    this.adminLogin.reset();
  }
}
