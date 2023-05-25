import { Injectable } from '@angular/core';
import { Imenu } from '../interfaces/imenu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  // To get all menu items
  getMenuItems() {
    return this.http.get<Imenu[]>(this.url + "/food");
  }

  // Create item
  addItem(data: any) {
    return this.http.post<Imenu>(this.url + "/add-food", data);
  }

  getItemById(item_id: any){
    return this.http.get<Imenu>(this.url + "/food/" + item_id);
  }

  getByCategory1() {
    return this.http.get<Imenu[]>(this.url + "/category1");
  }

  getByCategory2() {
    return this.http.get<Imenu[]>(this.url + "/category2");
  }

  getByCategory3() {
    return this.http.get<Imenu[]>(this.url + "/category3");
  }

  getByCategory4() {
    return this.http.get<Imenu[]>(this.url + "/category4");
  }





}
