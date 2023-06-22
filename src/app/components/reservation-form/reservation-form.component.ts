import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservationForm;

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      phone_number: [0, [Validators.required, Validators.minLength(10)]],
      reservation_date: ["", [Validators.required]],
      numberofpeople: ["", [Validators.required]]
    });
  }

  // onSubmit of the form
  onSubmit() {
    console.log(this.reservationForm.value);
    let reservation_data = this.reservationForm.value;

    this.reservationService.createReservation(reservation_data).subscribe((results)=>{
      console.log(results);
      this.reservationForm.reset();
      alert("Reservation made successfully");
    })
  }

  get nameFormControl() {
    return this.reservationForm.get('name')!;
  }
  get phone_numberFormControl() {
    return this.reservationForm.get('phone_number')!;
  }
  get reservation_dateFormControl() {
    return this.reservationForm.get('reservation_date')!;
  }
  get numberofpeopleFormControl() {
    return this.reservationForm.get('numberofpeople')!;
  }

}
