import { Component, Inject, Input, OnInit } from '@angular/core';
import { IProductCarousel } from '../../../models/interfaces/testInterface';
import { productCarouselList } from '../../../models/constants/testConstants';
import { ProductCardCarouselComponent } from '../../layouts/componentLayouts/product-card-carousel/product-card-carousel.component';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [ProductCardCarouselComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css'
})
export class ProductCarouselComponent{

  fullCatalog: IProductCarousel[] = productCarouselList

  carouselList: [IProductCarousel[]] = this.splitList(this.fullCatalog, 5);

  constructor() {
    this.test();
  }

  test() {
    console.log(this.fullCatalog)
    console.log(this.carouselList)
    console.log(this.carouselList.slice(1))
  }


  splitList(listToSplit: any[], displayPerSlide: number): [any[]] {
    let carouselList: [any[]] = [[]];
    const remainder: number = listToSplit.length % displayPerSlide;

    if (listToSplit.length < 3) {
      return [listToSplit]
    }

    if (remainder == 0) {
      for (let i=0; i< Math.floor(listToSplit.length/displayPerSlide); i++) {
        console.log(i, i+1)
        carouselList[i] = listToSplit.slice(i*displayPerSlide, (i+1)*displayPerSlide)
        console.log(carouselList[i])
      }
    } else {
      let sliced: any[]  = listToSplit.slice(0, listToSplit.length-remainder)
      for (let i=0; i< Math.floor(sliced.length/displayPerSlide); i++) {
        carouselList[i] = sliced.slice(i, i+displayPerSlide)
      }
      carouselList.push(listToSplit.slice(listToSplit.length-remainder))
    }
    return carouselList;
  }
}
