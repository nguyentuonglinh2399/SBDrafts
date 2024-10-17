import { Component, Input, OnInit, Signal, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductDetail } from '../../../models/classes/ProductDetail';
import { testProduct } from '../../testVariables';
import { checkDimensions } from '../../utils/productFormValidators';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-product-detail-section',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-detail-section.component.html',
  styleUrl: './product-detail-section.component.scss'
})
export class ProductDetailSectionComponent implements OnInit{

  @Input() productDetail: ProductDetail = testProduct;
  
  productForm: FormGroup;
  
  currentPic: string;
  currentQuantity = signal(1);
  validQuantity = signal(true);
  quantity: number = 1;

  maxDimensions: number = 8;
  materialOptions: string[] = ["Smooth", "Rough", "Shit"]
  finishingOptions: string[] = ["HO", "GO", "PPTO"];
  validDimensions: boolean;
  hasSlit: boolean = true;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      dimensionsGroup: this.fb.group({
        width: [2, [Validators.required, Validators.pattern("^[0-9]*$")]],
        height: [2, [Validators.required, Validators.pattern("^[0-9]*$")]],
        maxDimensions : [this.maxDimensions]
      }, { validators: checkDimensions} ), 
      material: [''],
      finishingOption: ['', [Validators.required]],
      specialInstructions: [''],
      quantity: [1, [Validators.required, Validators.pattern("^[0-9]*$")]]
    },)

    this.validDimensions = this.productForm.get('dimensionsGroup').valid;
  };

  ngOnInit(): void {
    this.currentPic = this.productDetail.thumbnails[0];
    this.productForm.get('dimensionsGroup').valueChanges.subscribe(() => {
      this.validDimensions = this.productForm.get('dimensionsGroup').valid;
    })
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

  // updateCurrentQuatity(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   this.validQuantity.set(this.isValid(target.value))
  //   // console.log(`${target.value} => ${this.validQuantity()}`);
  //   this.currentQuantity.set(Number(target.value));
  // }

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

}
