import { Component, Input } from '@angular/core';
import { IProductSpec } from '../../../models/interfaces/testInterface';
import { productSpec } from '../../../models/constants/testConstants';

@Component({
  selector: 'app-product-specification',
  standalone: true,
  imports: [],
  templateUrl: './product-specification.component.html',
  styleUrl: './product-specification.component.css'
})
export class ProductSpecificationComponent {

  @Input() testSpec: IProductSpec = productSpec;

}
