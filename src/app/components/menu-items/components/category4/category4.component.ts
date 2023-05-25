import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.css']
})
export class Category4Component implements OnInit {

  category4!: Imenu[];

  constructor(private menuService: MenuService) {
    menuService.getByCategory4().subscribe((results: Imenu[]) => {
      this.category4 = results;
    });
  }
  ngOnInit(): void {
    console.log('Category 4 component initialized.');
  }
}
