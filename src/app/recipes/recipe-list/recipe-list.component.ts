import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipe: Recipe[]) =>{
        this.recipes = recipe;
      }
    )
    this.recipes = this.recipeService.getRecipes();
   
  }
  
  onNewRecipe(){
     this.router.navigate(['new'], {relativeTo: this.route});
     
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
