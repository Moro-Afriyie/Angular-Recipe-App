import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }


  // fetch the route parameters and selecting a recipe by it's id
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id); // loads the corresponding recipe by id
    });
  }

  onAddToShoppingList(){
    this.recipeService.addingIngredientsToShoppingList(this.recipe.ingredients);
  }


  //navigate to the edit recipe page
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
      }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
