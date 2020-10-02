import { Ingredients } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredients[] = [
    new Ingredients('apples', 5),
    new Ingredients('Tomatoes', 20),
  ];

  // public addNewIngredient = new EventEmitter<Ingredients[]>();
  public addNewIngredient = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  // returns the ingredients to be edited
  getIngredient(index: number){
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredients){
    this.ingredients.push(ingredient);
    this.addNewIngredient.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredients[]){

    this.ingredients.push(...ingredient);
    this.addNewIngredient.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredients){
    this.ingredients[index] = newIngredient;
    this.addNewIngredient.next(this.ingredients.slice()); // passes it to the other components

  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.addNewIngredient.next(this.ingredients.slice());
  }
}
