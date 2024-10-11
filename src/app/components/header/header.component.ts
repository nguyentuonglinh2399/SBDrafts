import { Component } from '@angular/core';
import { SBLogo } from '../../../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  SBLogo: String = SBLogo;

}
