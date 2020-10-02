import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredients } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // public recipeSelected = new EventEmitter<Recipe>();
// array of recipe objects
recipesChanged = new Subject<Recipe[]>();
private recipes: Recipe[] = [
  new Recipe('A banku recipe' , 'this is banku', 'https://th.bing.com/th/id/OIP.MFnA_vjOPx_Z0IYa6iMWKgHaE8?pid=Api&rs=1',
  [new Ingredients('tomatoes', 20), new Ingredients('pear', 20), new Ingredients('onion', 20)]),
  new Recipe('A banku recipe' , 'this is banku', 'https://th.bing.com/th/id/OIP.MFnA_vjOPx_Z0IYa6iMWKgHaE8?pid=Api&rs=1',
  [new Ingredients('tomatoes', 20), new Ingredients('pear', 20), new Ingredients('onion', 20)]),
  new Recipe('A banku recipe' , 'this is banku', 'https://th.bing.com/th/id/OIP.MFnA_vjOPx_Z0IYa6iMWKgHaE8?pid=Api&rs=1',
  [new Ingredients('tomatoes', 20), new Ingredients('pear', 20), new Ingredients('onion', 20)]),
  new Recipe('A banku recipe' , 'this is banku', 'https://th.bing.com/th/id/OIP.MFnA_vjOPx_Z0IYa6iMWKgHaE8?pid=Api&rs=1',
  [new Ingredients('tomatoes', 20), new Ingredients('pear', 20), new Ingredients('onion', 20)]),
];
  constructor(private SLservice: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice(); // returns a copy of the recipe
  }

  addingIngredientsToShoppingList(ingredient: Ingredients[]){
      this.SLservice.addIngredients(ingredient);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }
}
