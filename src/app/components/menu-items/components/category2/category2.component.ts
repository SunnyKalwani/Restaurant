import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit{

  category2!: Imenu[];
  constructor(private menuService: MenuService, private cartService: CartService) {
    menuService.getByCategory1().subscribe((results)=>{
      this.category2 = results;

      this.category2.forEach((a:any)=>{
        Object.assign(a, {quantity: 1, total: a.item_price})
      })
    });
  }

  ngOnInit(): void {
    console.log('Category 1 component initialized');
    let data = this.cartService.testCart;
    console.log(data);
  }
  addtoCart(index: any){
    console.log(index)
    this.cartService.addtoCart(index);
  }
}
