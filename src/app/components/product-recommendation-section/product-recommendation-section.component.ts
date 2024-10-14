import { Component, Input } from '@angular/core';
import { IRec } from '../../../models/interfaces/testInterface';
import { productRec } from '../../../models/constants/testConstants';

@Component({
  selector: 'app-product-recommendation-section',
  standalone: true,
  imports: [],
  templateUrl: './product-recommendation-section.component.html',
  styleUrl: './product-recommendation-section.component.css'
})
export class ProductRecommendationSectionComponent {

  @Input() productRecDetails: IRec[] = productRec;
}
