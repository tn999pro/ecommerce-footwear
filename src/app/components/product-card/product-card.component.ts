import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cartItem.model';

import { formatCurrency } from '../../utils/format';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  
// Recibe el producto del componente padre
  @Input() product!: Product; 
  // Emite el item al componente padre cuando se añade al carrito
  @Output() addToCart = new EventEmitter<CartItem>();

  // Inyectamos el servicio de Dialog
  constructor(public dialog: MatDialog) {}

  // Función para formatear moneda, accesible desde la plantilla
  formatPrice(price: number): string {
    return formatCurrency(price);
  }

  // Función para abrir el modal
  openProductDialog(e?: Event): void {
    // Detenemos la propagación si se hizo clic en el botón "Agregar"
    e?.stopPropagation(); 

    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: { product: this.product }, // Pasa el producto al modal
      maxWidth: '800px', // Ancho del modal
      autoFocus: false
    });

    // Escucha el evento de cierre del modal
    dialogRef.afterClosed().subscribe(result => {
      // Si el modal devolvió un 'result' (es decir, se hizo clic en "Agregar")
      if (result) {
        this.addToCart.emit(result as CartItem);
      }
    });
  }
}
