import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent  {

  category_view: string ="all" ;

  totalCartItems!: number;

  constructor(private cartService: CartService){
    cartService.getProducts().subscribe((results)=>{
      this.totalCartItems = results.length;
    })
  }

}
