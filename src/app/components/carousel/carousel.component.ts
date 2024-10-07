import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  imageList: string[] = [
    "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png",
    "https://cdn.marvel.com/content/1x/005smp_ons_cut_dsk_01_5.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/how-strong-is-spider-man-in-comics-movies-and-beyond.jpg"
  ]

  constructor() {
    console.log(this.imageList)
  }

}
