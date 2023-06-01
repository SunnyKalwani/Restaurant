import { Component, Input } from '@angular/core';
import { Ifeedback } from 'src/app/interfaces/ifeedback';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent {

  @Input() feedback_data!: Ifeedback;

}
