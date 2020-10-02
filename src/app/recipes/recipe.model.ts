import { Ingredients } from './../shared/ingredient.model';
// recipe module

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public recipe: Recipe;
    public ingredients: Ingredients[];
    constructor(name: string, desc: string, image: string, ingredient: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ingredient;
    }
    }
