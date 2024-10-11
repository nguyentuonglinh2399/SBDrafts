import { Component, Input } from '@angular/core';
import { IProductCarousel } from '../../../../models/interfaces/testInterface';

@Component({
  selector: 'app-product-card-carousel',
  standalone: true,
  imports: [],
  templateUrl: './product-card-carousel.component.html',
  styleUrl: './product-card-carousel.component.scss'
})
export class ProductCardCarouselComponent {

  @Input() productCard!: IProductCarousel;

}
