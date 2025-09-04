import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"product-list", component:ProductListComponent},
    {path:"product-details/:id", component:ProductDetailsComponent}
];
