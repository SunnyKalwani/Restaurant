import { Component } from '@angular/core';
import { Ireservation } from 'src/app/interfaces/ireservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.css']
})
export class AdminReservationsComponent {

  reservations!: Ireservation[];

  constructor(private reservationService: ReservationService) {
    reservationService.getReservation().subscribe((result) => {
      this.reservations = result;
    })
  }

  ngOnInit(): void {
    console.log("component initialized");
  }

  removeItem(reservation_id: number) {
    this.reservationService.deleteReservation(reservation_id);
  }
}
