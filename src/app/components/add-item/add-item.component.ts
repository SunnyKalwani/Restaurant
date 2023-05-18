import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  addItemForm;

  constructor(private formBuilder: FormBuilder){
    this.addItemForm = formBuilder.group({
      item_name:[],
      item_price:[],
      description:[],
      category:[],
      image:[],
      veg_nonveg:[],
    });
  }
  onSubmit(){
    console.log(this.addItemForm.value);
    this.addItemForm.reset();
  }

}
