import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private adminService: AdminService, private router: Router) { }

  canActivate(): boolean {
    if (!this.adminService.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;

    } else {
      return true;
    }

  }

}
