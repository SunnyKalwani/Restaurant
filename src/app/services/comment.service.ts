import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icomment } from '../interfaces/icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  // To get all comments
  getComments(){
    return this.http.get<Icomment[]>(this.url + "/comment");
  }

  // To post a comment
  createComment(data:any){
    return this.http.post<Icomment>(this.url + "/comment", data);
  }

  deleteComment(){
    
  }
}
