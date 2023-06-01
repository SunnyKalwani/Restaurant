import { Component, OnInit } from '@angular/core';
import { Iorders } from 'src/app/interfaces/iorders';
import { FeedbackService } from 'src/app/services/feedback.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit{

  orders!: Iorders[];

  constructor(private orderService: OrdersService){
    orderService.getOrder().subscribe((result)=>{
      this.orders = result;
    })
  }

  ngOnInit(): void {
    console.log("component initialized")
  }

}
