import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { ProductDetailSectionComponent } from "../../components/product-detail-section/product-detail-section.component";
import { ProductDetail } from '../../../models/classes/ProductDetail';
import { testProduct } from '../../testVariables';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, BreadcrumbComponent, ProductDetailSectionComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  testDetail: ProductDetail = testProduct;  

}
