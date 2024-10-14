import { Component, Input, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetail } from '../../../models/classes/ProductDetail';
import { testProduct } from '../../testVariables';

@Component({
  selector: 'app-product-detail-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-detail-section.component.html',
  styleUrl: './product-detail-section.component.scss'
})
export class ProductDetailSectionComponent implements OnInit{

  @Input() productDetail: ProductDetail = testProduct;
  
  currentPic: string;
  currentQuantity = signal(1);
  validQuantity = signal(true);

  constructor() {

  }

  ngOnInit(): void {
    this.currentPic = this.productDetail.thumbnails[0]
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
    } else {
      if (this.validQuantity) {
        this.currentQuantity.update(currentValue => currentValue - 1);
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

  updateCurrentQuatity2(currentValue: number): void {
    this.validQuantity.set(this.isValid(this.currentQuantity))
    console.log(`${this.currentQuantity()} => ${this.validQuantity()}`);
    this.currentQuantity.set(this.currentQuantity());
  }

  isValid(currentQuantity: Signal<number>): boolean {
    return /^[+-]?\d+$/.test(String(currentQuantity()));
  }

}
