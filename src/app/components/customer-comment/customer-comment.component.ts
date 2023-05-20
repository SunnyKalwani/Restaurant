import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-comment',
  templateUrl: './customer-comment.component.html',
  styleUrls: ['./customer-comment.component.css']
})
export class CustomerCommentComponent {

  customerComment;

  constructor(private formBuilder: FormBuilder){
    this.customerComment = formBuilder.group({
      customer_name:["", [Validators.required, Validators.minLength(3)]],
      comment:["", [Validators.required, Validators.minLength(50)]],
      comment_date:["", Validators.required],
    });
  }
  onSubmit(){
    console.log(this.customerComment.value);
    this.customerComment.reset();
  }

  // Getter Method

  get customer_nameFormControl(){
    return this.customerComment.get('customer_name')!;
  }

  get commentFormControl(){
    return this.customerComment.get('comment')!;
  }

  get comment_dateFormControl(){
    return this.customerComment.get('comment_date')!;
  }

}
