import { Ingredients } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription =  this.shoppingListService.addNewIngredient.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
  });
  }
  onEditItem(index: number){
 this.shoppingListService.startedEditing.next(index);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
