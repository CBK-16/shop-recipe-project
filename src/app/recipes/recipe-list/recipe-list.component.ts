import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a recipe', 'https://runningonrealfood.com/wp-content/uploads/2021/02/vegan-one-pot-pasta-recipe-oh.-3-700x1049.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
