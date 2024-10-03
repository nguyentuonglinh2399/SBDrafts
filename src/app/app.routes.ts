import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';

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
        path: 'product-carousel',
        component: ProductCarouselComponent
    },
    {
        path: 'carousel',
        component: CarouselComponent
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
            }
        ]
    }
];
