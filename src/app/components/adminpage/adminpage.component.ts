import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iadmin } from 'src/app/interfaces/iadmin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {

  viewContent!: string;
  adminData: Iadmin;

  constructor(private adminService: AdminService, private router: Router){
    this.adminData = adminService.getAdminData();
  }

  logout(){
    localStorage.removeItem("currentAdmin");
    alert("Logout was successful");
    this.router.navigate(['/login']);
  }

  
}
