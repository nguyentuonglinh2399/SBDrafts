import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { FeatureComponent } from "../../components/feature/feature.component";
import { goProProductCard } from '../../testVariables';
import { IProductCard } from '../../../models/interfaces/IProductCard';
import { JumbotronComponent } from "../../components/jumbotron/jumbotron.component";
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ProductCardComponent, FeatureComponent, JumbotronComponent, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  goProProductCard: IProductCard = goProProductCard

}
