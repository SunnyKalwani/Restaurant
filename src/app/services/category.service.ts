import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Icategory[]>(this.url + "/categories");
  }
}
