import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CartItem } from './models/cartItem.model';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 

import { BestSellersComponent } from './components/best-sellers.component/best-sellers.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    HeaderComponent,
    HeroSectionComponent,
    CategoryGridComponent,
    BestSellersComponent
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

  // 3. Implementa la lógica de "Añadir al Carrito"
  onAddToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(i => 
      i.id === item.id && i.size === item.size && i.color === item.color
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    
    this.isCartOpen = true; // Abre el carrito al añadir un item
    console.log("Carrito:", this.cartItems);
  }

  onCartClick(): void {
    this.isCartOpen = !this.isCartOpen; 
  }

/*   // Métodos que se conectarán a los @Output de los componentes hijos
  onCartClick(): void {
    this.isCartOpen = true;
    console.log("Abrir carrito");
    // Aquí irá la lógica para abrir el Sidenav del carrito
  } */

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
