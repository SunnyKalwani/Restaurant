import { Component } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-alcoholicdrinks',
  templateUrl: './alcoholicdrinks.component.html',
  styleUrls: ['./alcoholicdrinks.component.css']
})
export class AlcoholicdrinksComponent {

  alcoholicdrinks!: Imenu[];

  constructor(private service: MenuService){
    service.getItems().subscribe((results: Imenu[])=>{
      this.alcoholicdrinks = results;
    })
  }

}
