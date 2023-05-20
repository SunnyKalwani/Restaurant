import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orderForm;

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = formBuilder.group({
      customer_name: ["", [Validators.required, Validators.minLength(3)]],
      phone_number: ["", [Validators.required, Validators.minLength(10)]],
      address: ["", [Validators.required, Validators.minLength(10)]],
      items_ordered: ["", [Validators.required]],
      order_date: ["", [Validators.required]]

    });
  }
  onSubmit() {
    console.log(this.orderForm.value);
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
