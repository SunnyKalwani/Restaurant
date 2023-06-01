import { Component, OnInit } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-admin-menus',
  templateUrl: './admin-menus.component.html',
  styleUrls: ['./admin-menus.component.css']
})
export class AdminMenusComponent implements OnInit {

  menus!: Imenu[];

  constructor(private menuService: MenuService){
    menuService.getMenuItems().subscribe((results)=>{
      this.menus = results;
    })
  }

  ngOnInit(): void {
    console.log("component Initialized");
  }

  deleteItem(menu_id: number){
    // Code to delete item from database
    this.menuService.deleteItem(menu_id).subscribe((results)=>{
      console.log(results);

      // Delete item from UI Display
      // Get item index from array
      let index = this.menus.findIndex((item)=>{
        return item.id === menu_id;
      });

      this.menus.splice(index,1); //Remove item data from array (UI)

      // Displaying Success message
      alert('item was deleted successfully');
    })
  }
}
