import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  addItemForm;

  constructor(private formBuilder: FormBuilder, private menuService: MenuService){
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
    
    let item_data = this.addItemForm.value;
    this.menuService.addItem(item_data).subscribe((results)=>{
      console.log(results);
    this.addItemForm.reset();
      alert("Item was added successfully");
    });
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
