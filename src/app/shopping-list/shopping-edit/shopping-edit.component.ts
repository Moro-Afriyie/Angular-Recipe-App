import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
// @Output() IngredientsAdded = new EventEmitter<Ingredients>();
@ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) =>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        // get the values of the form and edit it
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm){
     const value = form.value;
     const  newIngredients = new Ingredients(value.name, parseFloat(value.amount));
     if (this.editMode){
       this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredients);
     }
     else{
      this.shoppingListService.addIngredient(newIngredients);  
     }
     this.editMode = false;
     form.reset();
  }

  // Clears the item on the shopping list
  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }


  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
    
  }

}
