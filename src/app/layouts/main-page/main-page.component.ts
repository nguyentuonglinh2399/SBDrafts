import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { componentList } from '../../../constants';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  testCardList: Card[] = componentList

  constructor() {

  }
}
