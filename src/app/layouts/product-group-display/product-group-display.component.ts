import { Component } from '@angular/core';
import { IProductMain } from '../../../models/interfaces/testInterface';
import { productCards } from '../../../models/constants/testConstants';

@Component({
  selector: 'app-product-group-display',
  standalone: true,
  imports: [],
  templateUrl: './product-group-display.component.html',
  styleUrl: './product-group-display.component.css'
})
export class ProductGroupDisplayComponent {

  testProducts: IProductMain[] = productCards;

}
