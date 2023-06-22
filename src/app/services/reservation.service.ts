import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ireservation } from '../interfaces/ireservation';
import { Ifeedback } from '../interfaces/ifeedback';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  // to get all reservations
  getReservation(){
    return this.http.get<Ireservation[]>(this.url + "/reservation");
  }

  // Delete a feedback
  deleteReservation(reservation_id: number){
    return this.http.delete<Ireservation>(this.url + "/reservation/" + reservation_id);
  }

  // Create a Reservation
  createReservation(data: any){
    return this.http.post<Ireservation>(this.url + "/reservation", data)
  }
}
