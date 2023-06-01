import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Icategory } from 'src/app/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-delete-edit',
  templateUrl: './add-delete-edit.component.html',
  styleUrls: ['./add-delete-edit.component.css']
})
export class AddDeleteEditComponent {

  menuForm;
  categories!: Icategory[];

  constructor(private formBuilder: FormBuilder,
    private menuService: MenuService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
    this.menuForm = formBuilder.group({
      item_name: ["", [Validators.required, Validators.minLength(5)]],
      item_price: [0, [Validators.required]],
      description: ["", [Validators.required, Validators.minLength(25)]],
      category: [0, [Validators.required]],
      image: ["", [Validators.required]],
      veg_nonveg: ["", Validators.required]
    });

    // Retrieve Category data
    categoryService.getCategories().subscribe((results)=>{
      this.categories = results;
    })
  }

  onSubmit(){
    let menu_data = this.menuForm.value;

    this.menuService.addItem(menu_data).subscribe((results)=>{
      console.log(results);
      this.menuForm.reset();
      alert('Item Added to menu successfully');
    });
  }

  get item_nameFormControl(){
    return this.menuForm.get('item_name')!;
  }
  get item_priceFormControl(){
    return this.menuForm.get('item_price')!;
  }
  get descriptionFormControl(){
    return this.menuForm.get('description')!;
  }
  get categoryFormControl(){
    return this.menuForm.get('category')!;
  }
  get imageFormControl(){
    return this.menuForm.get('image')!;
  }
  get veg_nonvegFormControl(){
    return this.menuForm.get('veg_nonveg')!;
  }
}
