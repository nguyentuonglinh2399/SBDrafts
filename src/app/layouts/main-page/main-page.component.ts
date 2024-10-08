import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ICard } from '../../../models/interfaces/card';
import { componentList } from '../../../models/constants/testConstants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  testCardList: ICard[] = componentList

  constructor() {

  }
}
