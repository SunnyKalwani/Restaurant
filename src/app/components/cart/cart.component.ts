import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productList: any = [];
  preTax!: number;
  taxes!: number;
  grandTotal!: number;

  constructor(private cartService: CartService){
    cartService.getProducts().subscribe((results)=>{
      this.productList = results;
      this.preTax = this.cartService.getTotalPrice();
      this.taxes = this.preTax * 0.13;
      this.grandTotal = this.preTax + this.taxes;
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

  // Form Javascript

  
}
