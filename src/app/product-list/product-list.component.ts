import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import productsData from '../../../products.json';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsData;
}
