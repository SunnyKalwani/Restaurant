import { Component, Input } from '@angular/core';
import { Iorders } from 'src/app/interfaces/iorders';

@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrls: ['./adminorder.component.css']
})
export class AdminorderComponent {

  @Input() order_data!: Iorders;

}
