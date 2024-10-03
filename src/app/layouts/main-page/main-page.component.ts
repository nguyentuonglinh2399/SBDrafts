import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  componentLists: any

  cardLists: Card[] = [
    {
      cardImg: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png",
      cardTitle: "Sonyverse Spider-Man",
      cardText: "He's ok",
      cardText2: "He might not get another game lol"
    },
    {
      cardImg: "https://cdn.marvel.com/content/1x/005smp_ons_cut_dsk_01_5.jpg",
      cardTitle: "MCU Spider-Man",
      cardText: "He's alright",
      cardText2: "He's getting a new movie actually"
    },
    {
      cardImg: "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg",
      cardTitle: "The Amazing Spider-Man",
      cardText: "He's average"
    },
    {
      cardImg: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/how-strong-is-spider-man-in-comics-movies-and-beyond.jpg",
      cardTitle: "Sam Raimi's Spider-Man",
      cardText: "He's the best one!"
    }
  ];

  constructor() {

  }

}
