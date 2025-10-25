import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CartItem } from './models/cartItem.model';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { BestSellersComponent } from './components/best-sellers/best-sellers.component'; 
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //RouterOutlet,
    CommonModule,
    MatSidenavModule,
    HeaderComponent,
    HeroSectionComponent,
    CategoryGridComponent,
    BestSellersComponent,
    ProductGridComponent,
    WhyUsComponent,
    FooterComponent,
    CartComponent,
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

  onUpdateCartQuantity(event: { item: CartItem, quantity: number }): void {
    const { item, quantity } = event;
    if (quantity === 0) {
      // Si la cantidad es 0, elimina el item
      this.onRemoveCartItem(item);
    } else {
      // Actualiza la cantidad (creando nuevo array)
      this.cartItems = this.cartItems.map(i => 
        (i.id === item.id && i.size === item.size && i.color === item.color)
        ? { ...i, quantity: quantity }
        : i
      );
    }
  }

  // 5. Implementa la lógica para eliminar item
  onRemoveCartItem(itemToRemove: CartItem): void {
    // Filtra el item (creando nuevo array)
    this.cartItems = this.cartItems.filter(item => 
      !(item.id === itemToRemove.id && item.size === itemToRemove.size && item.color === itemToRemove.color)
    );
    // Si el carrito queda vacío, lo cerramos (opcional)
    if (this.cartItems.length === 0) {
       this.isCartOpen = false;
    }
  }

  // 6. Método para cerrar el carrito desde el CartComponent
  onCloseCart(): void {
    this.isCartOpen = false;
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
