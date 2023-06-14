import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Imenu } from 'src/app/interfaces/imenu';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orderForm;
  productList!: Imenu[];
  orderItems!: number[];
  grandTotal!: number;

  constructor(private formBuilder: FormBuilder, private cartService: CartService) {
    this.orderForm = formBuilder.group({
      customer_name: ["", [Validators.required, Validators.minLength(3)]],
      phone_number: ["", [Validators.required, Validators.minLength(10)]],
      address: ["", [Validators.required, Validators.minLength(10)]],
      items_ordered:[],
      order_date: new Date(),

    });

    console.log("component")

    cartService.getProducts().subscribe((results)=>{
      this.productList = results;
      this.orderItems = this.productList.map(item => item.id);
      console.log(this.orderItems)
      this.grandTotal = this.cartService.getTotalPrice() +(0.13*this.cartService.getTotalPrice());
    })


  }
  onSubmit() {
    console.log(this.orderForm.value);
    console.log(this.productList)
    this.orderForm.reset();
  }

  // Getter Methods
  // All the methods below will return a form control

  get customer_nameFormControl() {
    return this.orderForm.get('customer_name')!;
  }

  get phone_numberFormControl() {
    return this.orderForm.get('phone_number')!;
  }

  get addressFormControl() {
    return this.orderForm.get('address')!;
  }

  get items_orderedFormControl() {
    return this.orderForm.get('items_ordered')!;
  }

  get order_dateFormControl() {
    return this.orderForm.get('order_date')!;
  }



}
