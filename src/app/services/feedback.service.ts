import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ifeedback } from '../interfaces/ifeedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  // To get all feedback items
  getFeedback(){
    return this.http.get<Ifeedback[]>(this.url + "/feedback");
  }

  // Delete a feedback
  deleteFeedback(feedback_id: number){
    return this.http.delete<Ifeedback>(this.url + "/feedbacks/" + feedback_id);
  }

  // Create a feedback
  createFeedback(data: any){
    return this.http.post<Ifeedback>(this.url + "/feedback", data)
  }

  

}
