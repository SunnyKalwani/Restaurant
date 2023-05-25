import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {

  category1!: Imenu[];

  constructor(private menuService: MenuService) {
    menuService.getByCategory1().subscribe((results)=>{
      this.category1 = results;
    });
  }

  ngOnInit(): void {
    console.log('Category 1 component initialized');
  }

}
