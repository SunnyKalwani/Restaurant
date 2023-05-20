import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackForm;

  constructor(private formBuilder: FormBuilder){
    this.feedbackForm = formBuilder.group({
      first_name: ["",[Validators.required, Validators.minLength(3)]],
      last_name:["", [Validators.required, Validators.minLength(3)]],
      email_id:["", [Validators.email, Validators.required]],
      feedback:["",[Validators.required, Validators.minLength(100)]],
      feedback_date: ["", [Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.feedbackForm.value);
    this.feedbackForm.reset();
  }

  get first_nameFormControl(){
    return this.feedbackForm.get('first_name')!;
  }

  get last_nameFormControl(){
    return this.feedbackForm.get('last_name')!;
  }

  get email_idFormControl(){
    return this.feedbackForm.get('email_id')!;
  }

  get feedbackFormControl(){
    return this.feedbackForm.get('feedback')!;
  }

  get feedback_dateFormControl(){
    return this.feedbackForm.get('feedback_date')!;
  }

}
