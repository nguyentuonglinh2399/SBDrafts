import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { componentList } from '../../../constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  testCardList: Card[] = componentList

  constructor() {

  }
}
