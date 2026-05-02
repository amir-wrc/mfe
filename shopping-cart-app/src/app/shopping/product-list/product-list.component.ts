import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      image: '💻',
      description: 'High-performance laptop for professionals'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      image: '📱',
      description: 'Latest smartphone with amazing features'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      image: '🎧',
      description: 'Wireless noise-cancelling headphones'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 299.99,
      image: '⌚',
      description: 'Fitness tracker and smartwatch'
    },
    {
      id: 5,
      name: 'Tablet',
      price: 499.99,
      image: '📱',
      description: 'Portable tablet for work and entertainment'
    },
    {
      id: 6,
      name: 'Camera',
      price: 799.99,
      image: '📷',
      description: 'Professional digital camera'
    }
  ];

  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartItemCount = this.cartService.getCartItemCount();
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
