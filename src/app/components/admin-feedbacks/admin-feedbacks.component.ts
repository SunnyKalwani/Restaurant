import { Component, OnInit } from '@angular/core';
import { Ifeedback } from 'src/app/interfaces/ifeedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-admin-feedbacks',
  templateUrl: './admin-feedbacks.component.html',
  styleUrls: ['./admin-feedbacks.component.css']
})
export class AdminFeedbacksComponent implements OnInit {

  feedbacks!: Ifeedback[];

  constructor(private feedbackService: FeedbackService){
    feedbackService.getFeedback().subscribe((result)=>{
      this.feedbacks = result;
    })
  }

  ngOnInit(): void {
    console.log("component initialized");
  }

}
