import { Component } from '@angular/core';
import { CardComponent } from '../../layouts/componentLayouts/card/card.component';
import { ICard } from '../../../models/interfaces/card';
import { componentList } from '../../../models/constants/testConstants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  testCardList: ICard[] = componentList

  constructor() {

  }
}
