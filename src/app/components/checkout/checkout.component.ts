import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutItem!: Imenu;
  checkoutItemName!: string;
  checkoutItemPrice!: number;
  orderForm;

  constructor(private routeService: ActivatedRoute,
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private orderService: OrdersService) {

    let itemId = routeService.snapshot.paramMap.get('item_id');
    menuService.getItemById(itemId).subscribe((results) => {
      this.checkoutItem = results;
      console.log(this.checkoutItem);
      this.checkoutItemPrice = this.checkoutItem.item_price;
      this.checkoutItemName = this.checkoutItem.item_name;
      console.log(this.checkoutItemName);
      this.orderForm.patchValue(
        { items_ordered: this.checkoutItem.id }
      )
    })

    this.orderForm = formBuilder.group({
      customer_name: ["", [Validators.required, Validators.minLength(3)]],
      phone_number: ["", [Validators.required, Validators.minLength(10)]],
      address: ["", [Validators.required, Validators.minLength(10)]],
      items_ordered: [0, [Validators.required]],
      order_date: ["", [Validators.required]]
    });

  }

  onSubmit() {
    console.log(this.orderForm.value);
    let item_data = this.orderForm.value;

    this.orderService.createOrder(item_data).subscribe((results) => {
      console.log(results);
      this.orderForm.reset();
      alert(`${this.checkoutItemName} for ${item_data.customer_name} will be ready in 30 minutes... Order Total:$ ${this.checkoutItemPrice}`)
    })


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


