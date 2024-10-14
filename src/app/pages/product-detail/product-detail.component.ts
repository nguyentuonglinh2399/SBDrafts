import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { ProductDetailSectionComponent } from "../../components/product-detail-section/product-detail-section.component";
import { ProductDetail } from '../../../models/classes/ProductDetail';
import { testProduct } from '../../testVariables';
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductRecommendationSectionComponent } from "../../components/product-recommendation-section/product-recommendation-section.component";
import { productRec, productSpec } from '../../../models/constants/testConstants';
import { IProductSpec, IRec } from '../../../models/interfaces/testInterface';
import { ProductSpecificationComponent } from "../../components/product-specification/product-specification.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, BreadcrumbComponent, ProductDetailSectionComponent, FooterComponent, ProductRecommendationSectionComponent, ProductSpecificationComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  testDetail: ProductDetail = testProduct;  
  recommendedProduct: IRec[] = productRec;

  productSpec: IProductSpec = productSpec;

}
