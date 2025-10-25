import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent implements OnInit {
  bestSellers: Product[] = [];
  @Output() addToCart = new EventEmitter<CartItem>();
  // Inyecta el servicio de productos
  constructor(private productService: ProductService) {}

  // ngOnInit es el "hook" que se ejecuta cuando el componente se inicia
  ngOnInit(): void {
    this.bestSellers = this.productService.getBestSellers();
  }

  // Función que recibe el evento de ProductCard y lo vuelve a emitir
  onAddToCart(item: CartItem): void {
    this.addToCart.emit(item);
  }

}
