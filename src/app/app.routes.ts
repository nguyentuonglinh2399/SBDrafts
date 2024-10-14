import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductGroupDisplayComponent } from './layouts/componentLayouts/product-group-display/product-group-display.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ProductDetailSectionComponent } from './components/product-detail-section/product-detail-section.component';
import { ProductSpecificationComponent } from './components/product-specification/product-specification.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'landing-page',
        component: LandingPageComponent
    },
    {
        path: 'product-detail',
        component: ProductDetailComponent,
        children: [
            {
                path: 'product-spec',
                component: ProductSpecificationComponent
            }
        ]
    },
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: 'carousel',
                component: CarouselComponent
            },
            {
                path: 'product-carousel',
                component: ProductCarouselComponent
            },
            {
                path: 'product-group-display',
                component: ProductGroupDisplayComponent
            },
            {
                path: 'header',
                component: HeaderComponent
            },
            {
                path: 'footer',
                component: FooterComponent
            },
            {
                path: 'navbar',
                component: NavbarComponent
            },
            {
                path: 'jumbotron',
                component: JumbotronComponent
            },
            {
                path: 'landing-product-card',
                component: ProductCardComponent
            },
            {
                path: 'feature',
                component: FeatureComponent
            },
            {
                path: 'product-detail-section',
                component: ProductDetailSectionComponent
            }
        ]
    }
];
