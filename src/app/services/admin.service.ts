import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iadmin } from '../interfaces/iadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  registerAdmin(formData: any){
    return this.httpClient.post<Iadmin>("http://localhost:3000/register", formData )
  }

  loginAdmin(formData: any){
    return this.httpClient.post<Iadmin>("http://localhost:3000/login", formData)
  }

  getAdminData(){
    let data = localStorage.getItem('currentAdmin');
    return data? JSON.parse(data) : null; //JSON.parse converts string to an object
  }

  isAuthenticated(){
    return this.getAdminData() !== null ? true : false;
  }
}
