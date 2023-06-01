import { Component } from '@angular/core';
import { Icomment } from 'src/app/interfaces/icomment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments!: Icomment[];

  constructor(private commentService: CommentService){
    commentService.getComments().subscribe((results) =>{
      this.comments = results;
    });
  }

}
