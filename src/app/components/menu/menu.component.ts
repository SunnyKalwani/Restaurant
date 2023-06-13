import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu!: Imenu;

  constructor(private cartService: CartService) {
    // this.menu.forEach((a: any) => {
    //   Object.assign(a, { quantity: 1, total: a.price })
    // })
  }

  addToCart(menu: Imenu) {
    this.cartService.addtoCart(menu);
  }

}
