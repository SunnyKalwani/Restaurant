import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnChanges {

  @Input() menu_data!: Imenu;

  // Custom event to delete event
  @Output() deleteEvent = new EventEmitter();

  onDelete(){
    if(confirm(`Are you sure you want to delete ${this.menu_data.item_name}?`)){
      this.deleteEvent.emit(this.menu_data.id); //Triggering the event
    }
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('menu_data property changed');
    console.log(changes);
  }

}
