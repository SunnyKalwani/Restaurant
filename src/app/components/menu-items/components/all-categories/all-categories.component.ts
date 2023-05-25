import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit{

  menus!: Imenu[];

  constructor(private menuService: MenuService) {
    menuService.getMenuItems().subscribe((results: Imenu[]) => {
      this.menus = results;
    });
  }
  ngOnInit(): void {
    console.log('Component initialized.');
  }

}
