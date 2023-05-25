import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-customer-comment',
  templateUrl: './customer-comment.component.html',
  styleUrls: ['./customer-comment.component.css']
})
export class CustomerCommentComponent {

  customerComment;

  constructor(private formBuilder: FormBuilder,
    private commentService: CommentService){
    this.customerComment = formBuilder.group({
      customer_name:["", [Validators.required, Validators.minLength(3)]],
      comment:["", [Validators.required, Validators.minLength(50)]],
      comment_date:["", Validators.required],
    });
  }
  onSubmit(){
    console.log(this.customerComment.value);
    let comment_data = this.customerComment.value;

    this.commentService.createComment(comment_data).subscribe((results)=>{
      console.log(results);
      this.customerComment.reset();
      alert("Comment was submitted successfully");
    })

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
