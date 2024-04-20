import { Component,Input, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { FoodCard } from '../productCard';
import { FoodservService } from '../cardFounder';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductComponent, NgFor, SearchComponent,NgIf, CategoryComponent, CardComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
    @Input() food!:FoodCard
    foods:FoodCard[] = []
    godService: FoodservService = inject(FoodservService)

  constructor(){

    this.foods = this.godService.getAllCards()

  }
 
    searchFilter:string = ''

    onSearching(keyword:string){
        this.searchFilter = keyword
        console.log(keyword)
    }



    ganresCount:string ='all'
    categoriesChanged(data:string){
        this.ganresCount = data
    }
    
}
