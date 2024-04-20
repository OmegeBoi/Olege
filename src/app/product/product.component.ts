import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodCard } from '../productCard';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() food!:FoodCard
}
