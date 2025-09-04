import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Iphone 6s",
      price: 4000,
      location: "SM Baguio",
      condition: "Good"
    },
    {
      id: 2,
      name: "Iphone X",
      price: 6000,
      location: "SM San Fernando",
      condition: "Good"
    },
    {
      id: 3,
      name: "Iphone Xs",
      price: 6500,
      location: "SM Baguio",
      condition: "Good"
    },
    {
      id: 4,
      name: "Iphone XR",
      price: 6500,
      location: "SM Tarlac",
      condition: "Good"
    },
    {
      id: 5,
      name: "Iphone 12 Pro Max",
      price: 12000,
      location: "SM Rosales",
      condition: "Good"
    },

  ]
}
