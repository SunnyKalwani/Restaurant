import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.css']
})
export class Category3Component implements OnInit {
  category3!: Imenu[];

  constructor(private menuService: MenuService) {
    menuService.getByCategory3().subscribe((results)=>{
      this.category3 = results;
    });
  }

  ngOnInit(): void {
    console.log('Category 3 component initialized');
  }

}
