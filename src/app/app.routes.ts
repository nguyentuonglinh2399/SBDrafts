import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { ProductGroupDisplayComponent } from './layouts/componentLayouts/product-group-display/product-group-display.component';
import { ProductCardCarouselComponent } from './layouts/componentLayouts/product-card-carousel/product-card-carousel.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


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
        component: ProductDetailComponent
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
                path: 'top-nav',
                component: TopNavBarComponent
            },
            {
                path: 'product-carousel',
                component: ProductCarouselComponent
            },
            {
                path: 'product-group-display',
                component: ProductGroupDisplayComponent
            }

        ]
    }
];
