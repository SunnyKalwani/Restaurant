import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';
import { OrdersService } from 'src/app/services/orders.service';
import { HomeComponent } from '../home/home.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  productList!: Imenu[];
  checkoutItemPrice!: number;
  orderForm;
  orderItems!: any;


  constructor(private routeService: ActivatedRoute,
    private route: Router,
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private orderService: OrdersService,
    private cartService: CartService) {

    this.orderForm = formBuilder.group({
      customer_name: ["", [Validators.required, Validators.minLength(3)]],
      phone_number: ["", [Validators.required, Validators.minLength(10)]],
      address: ["", [Validators.required, Validators.minLength(10)]],
      items_ordered: "",
      order_date: new Date()
    });

    cartService.getProducts().subscribe((results) => {
      this.productList = results;
      this.orderItems = this.productList.map(item => item.id);
      
      console.log(this.orderItems)
      this.checkoutItemPrice = this.cartService.getTotalPrice() + (0.13 * this.cartService.getTotalPrice());

    })



  }

  onSubmit() {
    console.log(this.orderForm.value);
    let item_data = this.orderForm.value;
    item_data.items_ordered = JSON.stringify(this.orderItems);
    this.orderService.createOrder(item_data).subscribe((results) => {
      console.log(results);
      this.orderForm.reset();
        alert(`Order for ${item_data.customer_name} will be ready in 30 minutes... Order Total:$ ${this.checkoutItemPrice}`);
        this.route.navigate(['menu']);
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


