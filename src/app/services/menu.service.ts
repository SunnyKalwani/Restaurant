import { Injectable } from '@angular/core';
import { Imenu } from '../interfaces/imenu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getItems() : any {
    this.http.get<Imenu[]>("http://localhost:3000/food");
  }
}
