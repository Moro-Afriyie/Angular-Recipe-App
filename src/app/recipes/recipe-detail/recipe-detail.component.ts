import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeService.addingIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){}
  onDeleteRecipe(){}
}
