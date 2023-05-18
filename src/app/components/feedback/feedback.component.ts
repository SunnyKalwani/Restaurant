import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackForm;

  constructor(private formBuilder: FormBuilder){
    this.feedbackForm = formBuilder.group({
      first_name: [],
      last_name:[],
      email_id:[],
      feedback:[],
      feedback_date: []
    });
  }

  onSubmit(){
    console.log(this.feedbackForm.value);
    this.feedbackForm.reset();
  }

}
