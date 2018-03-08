import { Injectable, EventEmitter } from '@angular/core';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger', 
      'Juicy Burger', 
      'http://assets1.bigthink.com/system/idea_thumbnails/52166/size_1024/hamburger.jpg?1376167560',
      [
        new Ingredient('Meat Patty', 2),
      ]
    ),
    new Recipe(
      'pizza', 
      'Cheesy pizza', 
      'https://media1.popsugar-assets.com/files/thumbor/IzR55kQzo5vN-FKgulOvsy-ULVw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/06/07/934/n/1922729/e5e8c9ce4fdb5a75_cauliflower-crust.jpg',
      [
        new Ingredient('Cheese', 4),
        new Ingredient('Dull', 1)
      ]
    )
  ];

  constructor(private shoppinglistService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

}
