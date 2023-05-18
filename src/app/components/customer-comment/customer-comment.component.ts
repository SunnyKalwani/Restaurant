import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-comment',
  templateUrl: './customer-comment.component.html',
  styleUrls: ['./customer-comment.component.css']
})
export class CustomerCommentComponent {

  customerComment;

  constructor(private formBuilder: FormBuilder){
    this.customerComment = formBuilder.group({
      customer_name:[],
      comment:[],
      comment_date:[],
    });
  }
  onSubmit(){
    console.log(this.customerComment.value);
    this.customerComment.reset();
  }

}
