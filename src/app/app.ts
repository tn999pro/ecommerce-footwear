import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CartItem } from './models/cartItem.model';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    CategoryGridComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-footwear');

  cartItems: CartItem[] = [];
  isCartOpen = false;
  selectedCategory: string = "all";

  // Calculamos el total de items para el badge del header
  get cartItemsCount(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Métodos que se conectarán a los @Output de los componentes hijos
  onCartClick(): void {
    this.isCartOpen = true;
    console.log("Abrir carrito");
    // Aquí irá la lógica para abrir el Sidenav del carrito
  }

  onExploreClick(): void {
    console.log("Scroll a productos");
    // Lógica para hacer scroll
  }

  onOffersClick(): void {
    console.log("Scroll a ofertas");
    // Lógica para hacer scroll
  }

  onCategorySelected(categoryId: string): void {
    this.selectedCategory = categoryId;
    console.log("Categoría seleccionada:", categoryId);
  }
}
