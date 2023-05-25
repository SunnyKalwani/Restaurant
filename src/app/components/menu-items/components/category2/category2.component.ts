import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit{

  category2!: Imenu[];

  constructor(private menuService: MenuService) {
    menuService.getByCategory2().subscribe((results)=>{
      this.category2 = results;
    });
  }

  ngOnInit(): void {
    console.log('Category 2 component initialized');
  }
}
