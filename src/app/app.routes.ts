import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './layouts/pageLayouts/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { ProductGroupDisplayComponent } from './layouts/componentLayouts/product-group-display/product-group-display.component';
import { ProductCardCarouselComponent } from './layouts/componentLayouts/product-card-carousel/product-card-carousel.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'product-card-carousel',
        component: ProductCardCarouselComponent
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
