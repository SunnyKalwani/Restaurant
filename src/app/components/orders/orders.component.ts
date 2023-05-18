import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orderForm;

  constructor(private formBuilder: FormBuilder){
    this.orderForm = formBuilder.group({
      customer_name: [],
      phone_number:[],
      address:[],
      items_ordered:[],
      order_date:[]

    });
  }
  onSubmit(){
    console.log(this.orderForm.value);
    this.orderForm.reset();
  }

}
