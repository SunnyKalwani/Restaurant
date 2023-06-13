import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  menus!: Imenu[];
  productList!: Imenu[] ;

  constructor(private menuService: MenuService, private cartService: CartService) {
    menuService.getMenuItems().subscribe((results) => {
      this.menus = results;
      this.productList = results;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.item_price })
      })
    })
  }

  ngOnInit(): void {
    console.log('Component initialized.');
    let data = this.cartService.testCart;
    console.log(data);
  }

  addtoCart(index: any){
    console.log(index)
    this.cartService.addtoCart(index);
  }
}
