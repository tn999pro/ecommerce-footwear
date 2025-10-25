import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent implements OnInit, OnChanges{
// Recibe la categoría seleccionada del AppComponent
  @Input() selectedCategory: string = 'all'; 
  // Emite el evento cuando se añade un producto al carrito
  @Output() addToCart = new EventEmitter<CartItem>();

  allProducts: Product[] = []; // Guarda todos los productos una vez
  filteredProducts: Product[] = []; // Guarda los productos filtrados para mostrar

  // Inyectamos el servicio
  constructor(private productService: ProductService) {}

  // ngOnInit se ejecuta una vez al inicio
  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
    this.filterProducts(); // Filtra inicialmente (mostrará todos)
  }

  // ngOnChanges se ejecuta cada vez que cambia un @Input (selectedCategory)
  ngOnChanges(changes: SimpleChanges): void {
    // Si la propiedad 'selectedCategory' cambió...
    if (changes['selectedCategory']) {
      this.filterProducts(); // ...volvemos a filtrar
    }
  }

  // Lógica para filtrar los productos
  private filterProducts(): void {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(
        (p) => p.category === this.selectedCategory
      );
    }
  }

  // Propaga el evento 'addToCart' desde ProductCard hacia AppComponent
  onAddToCart(item: CartItem): void {
    this.addToCart.emit(item);
  }

  // Helper para obtener el nombre legible de la categoría
  get categoryTitle(): string {
    if (this.selectedCategory === 'all') {
      return 'Todos los Productos';
    }
    // Capitaliza la primera letra de la categoría
    return this.selectedCategory.charAt(0).toUpperCase() + this.selectedCategory.slice(1);
  }
}
