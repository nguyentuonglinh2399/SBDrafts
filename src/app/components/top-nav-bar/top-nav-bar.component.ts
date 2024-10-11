import { Component } from '@angular/core';
import { SBLogo, SBNumber, SBEmail } from '../../../constants';

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent {

  SBLogo: string = SBLogo
  SBNumber: string = SBNumber
  SBEmail: string = SBEmail


}
