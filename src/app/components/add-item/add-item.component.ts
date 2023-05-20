import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  addItemForm;

  constructor(private formBuilder: FormBuilder){
    this.addItemForm = formBuilder.group({
      item_name:["", [Validators.required]],
      item_price:["", [Validators.required]],
      description:["",[Validators.required, Validators.minLength(100)]],
      category:["", [Validators.required]],
      image:["", Validators.required],
      veg_nonveg:["", Validators.required],
    });
  }
  onSubmit(){
    console.log(this.addItemForm.value);
    this.addItemForm.reset();
  }

  get item_nameFormControl(){
    return this.addItemForm.get('item_name')!;
  }

  get item_priceFormControl(){
    return this.addItemForm.get('item_price')!;
  }

  get descriptionFormControl(){
    return this.addItemForm.get ('description')!;
  }

  get categoryFormControl(){
    return this.addItemForm.get('category')!;
  }

  get imageFormControl(){
    return this.addItemForm.get('image')!;
  }

  get veg_nonvegFormControl(){
    return this.addItemForm.get('veg_nonveg')!;
  }

}
