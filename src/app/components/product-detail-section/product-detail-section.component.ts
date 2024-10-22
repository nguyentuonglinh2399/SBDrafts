import { Component, inject, Input, OnInit, Signal, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductDetail } from '../../../models/classes/ProductDetail';
import { testProduct } from '../../testVariables';
import { checkDimensions } from '../../utils/productFormValidators';
import { Observable, subscribeOn } from 'rxjs';
import { ProductServiceService } from '../../service/product-service.service';
import { IAPIResponseModel, IProductAPI2 } from '../../../models/interfaces/testInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail-section',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './product-detail-section.component.html',
  styleUrl: './product-detail-section.component.scss'
})
export class ProductDetailSectionComponent implements OnInit{

  @Input() productDetail: ProductDetail = testProduct;
  productService = inject(ProductServiceService);
  productInfo: IProductAPI2;
  productId: number = 0;
  
  productForm: FormGroup;
  
  currentPic: string;
  currentQuantity = signal(1);
  validQuantity = signal(true);
  quantity: number = 1;

  maxDimensions: number = 8;
  materialOptions: string[] = ["Smooth", "Rough", "Shit"]
  validDimensions: boolean;
  // hasSlit: boolean = true;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    // this.initializeView();
    this.productForm = this.fb.group({
      dimensionsGroup: this.fb.group({
        width: [, [Validators.required, Validators.pattern("^[0-9]*$")]],
        height: [2, [Validators.required, Validators.pattern("^[0-9]*$")]],
        maxDimensions : [this.maxDimensions]
      }, { validators: checkDimensions} ), 
      material: [""],
      finishingOption: ['', [Validators.required]],
      specialInstructions: [''],
      quantity: [1, [Validators.required, Validators.pattern("^[0-9]*$")]],
      isSlit: [false, Validators.required]
    },)

    this.validDimensions = this.productForm.get('dimensionsGroup').valid;
  };

  ngOnInit(): void {
    this.initializeView();
    this.currentPic = this.productDetail.thumbnails[0];
    this.productForm.get('dimensionsGroup').valueChanges.subscribe(() => {
      this.validDimensions = this.productForm.get('dimensionsGroup').valid;
    })
    console.log(this.productInfo.dimensions.finalDimensions);
    // this.getProductInfo(this.productId);
  }


  handleClick(slide: string, event: MouseEvent) {
    this.currentPic = this.onThumbnail(slide);
    this.onLinkClick(event)
  }

  onThumbnail(slide: string): string {
    return slide;
  }

  onLinkClick(event: MouseEvent): void {
    event.preventDefault();
  }

  adjustQuantity(increment: boolean): void {
    if (increment) {
      this.currentQuantity.update(currentValue => Math.floor(currentValue) + 1);
      this.quantity++;
    } else {
      if (this.validQuantity) {
        this.currentQuantity.update(currentValue => currentValue - 1);
        this.quantity--;
      } else {
        this.currentQuantity.update(currentValue => Math.floor(currentValue) - 1);
      }

    }
  }

  updateValue(event) {
    console.log(event);
    console.log(parseFloat(event));
  }

  onSubmit(){
    if (this.productForm.valid) {
      console.log('Form Submitted', this.productForm.value);
    } else {
      console.log('Form is invalid');
      console.log(this.productForm.value);
    }
  }

  updateCurrentQuatity2(currentValue: number): void {
    this.validQuantity.set(this.isValid(this.currentQuantity))
    console.log(`${this.currentQuantity()} => ${this.validQuantity()}`);
    this.currentQuantity.set(this.currentQuantity());
  }

  isValid(currentQuantity: Signal<number>): boolean {
    return /^[+-]?\d+$/.test(String(currentQuantity()));
  }

  validateQuantity(quantity: string): boolean {
    if (isNaN(parseInt(quantity))) {
      return false;
    } else {
      return true;
    }
  }

  getProductInfo(productId: number) {
    this.productService.getProductById(productId).subscribe((res: IProductAPI2) => {
      this.productInfo = res;
      console.log(this.productInfo);
    })
  }

  initializeView() {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
    if (isNaN(this.productId)) {
      console.log("Hello");
      this.router.navigateByUrl("main");
    } else {
      this.getProductInfo(this.productId);
    }
  }

}
