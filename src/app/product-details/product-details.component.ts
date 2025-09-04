import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productId: number | null = null;
  product: any = null;
  productList = [
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
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productList.find(p => p.id === this.productId)
  }
}
