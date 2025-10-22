import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cartItem.model';
import { formatCurrency } from '../../utils/format';

@Component({
  selector: 'app-product-dialog',
  imports: [
    CommonModule,
    FormsModule, 
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonToggleModule 
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})
export class ProductDialogComponent {
product: Product;
  selectedSize: string = '';
  selectedColor: string;
  currentImageIndex: number = 0;

  constructor(
    // Referencia al modal en el que está
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    // Inyecta los datos pasados desde ProductCardComponent
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
    this.product = data.product;
    this.selectedColor = data.product.colors[0]; // Selecciona el primer color por defecto
  }

  // Función para formatear moneda
  formatPrice(price: number): string {
    return formatCurrency(price);
  }

  // Función para cambiar la imagen principal
  setCurrentImage(index: number): void {
    this.currentImageIndex = index;
  }

  // Función para agregar al carrito
  onAddToCartClick(): void {
    if (!this.selectedSize) {
      alert("Por favor selecciona una talla");
      return;
    }

    // Prepara el objeto CartItem
    const cartItem: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: 1,
      image: this.product.images[0],
    };

    // Cierra el modal y DEVUELVE el cartItem
    this.dialogRef.close(cartItem);
  }

  // Función para cerrar el modal sin hacer nada
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
