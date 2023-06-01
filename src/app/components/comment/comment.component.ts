import { Component, Input } from '@angular/core';
import { Icomment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comment_data!: Icomment;

}
