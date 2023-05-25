import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorders } from '../interfaces/iorders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  // Get all orders
  getOrder() {
    return this.http.get<Iorders[]>(this.url + "/orders")
  }

  // Create a new order
  createOrder(order_data: any) {
    return this.http.post<Iorders>(this.url + "/order", order_data);
  }
}
