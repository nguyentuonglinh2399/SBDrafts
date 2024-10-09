import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../../../models/interfaces/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  NOLINK: string = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"

  @Input() cardInfo: ICard = {
    cardImg: this.NOLINK,
    cardTitle: "No Title",
    cardText: "No Info",
  };

  // constructor(private cardInfo: Card) {
  //   this.cardInfo = cardInfo
  // }

  ngOnInit(): void {
  }

}
