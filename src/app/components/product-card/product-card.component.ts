import { Component, Input } from '@angular/core';
import { IProductCard } from '../../../models/interfaces/IProductCard';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() productDetails: IProductCard;

}
