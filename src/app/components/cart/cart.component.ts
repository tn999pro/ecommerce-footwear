import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

// Importaciones de Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; // Para la lista de items
import { MatDividerModule } from '@angular/material/divider'; // Separadores
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cartItem.model';
import { formatCurrency } from '../../utils/format';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout-dialog.component/checkout-dialog.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnChanges {
  
// Recibe los items del carrito desde AppComponent
  @Input() items: CartItem[] = []; 
  // Emite eventos para actualizar cantidad
  @Output() updateQuantity = new EventEmitter<{ item: CartItem, quantity: number }>(); 
  // Emite evento para eliminar item
  @Output() removeItem = new EventEmitter<CartItem>(); 
  // Emite evento para cerrar el Sidenav (carrito)
  @Output() closeCart = new EventEmitter<void>(); 

  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  // Inyectamos MatDialog (lo usaremos más tarde)
  // constructor(public dialog: MatDialog) {}
  constructor(private dialog: MatDialog) {}

  // ngOnChanges recalcula los totales cada vez que cambia el array 'items'
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.calculateTotals();
    }
  }

  // Calcula subtotal, impuestos y total
  private calculateTotals(): void {
    this.subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.tax = this.subtotal * 0.19; // Asumiendo 19% de IVA
    this.total = this.subtotal + this.tax;
  }

  // Emite el evento para actualizar cantidad
  onUpdateQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 0) { // No permite cantidad negativa
      this.updateQuantity.emit({ item, quantity: newQuantity });
    }
  }

  // Emite el evento para eliminar
  onRemoveItem(item: CartItem): void {
    this.removeItem.emit(item);
  }

  // Formateador de moneda para la plantilla
  formatPrice(price: number): string {
    return formatCurrency(price);
  }

  // función para abrir el modal
  openCheckoutModal(): void {
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      // Pasa los datos necesarios al modal
      data: { 
        items: this.items, 
        subtotal: this.subtotal, 
        tax: this.tax, 
        total: this.total 
      },
      width: '600px', // O el ancho que prefieras
      autoFocus: false, // Evita que enfoque el primer campo automáticamente
      maxHeight: '90vh' // Limita altura si el contenido es muy largo
    });

    dialogRef.afterClosed().subscribe(result => {
      // Si el modal devolvió 'submitted' (se envió por WhatsApp)
      if (result === 'submitted') {
        console.log('Cotización enviada, cerrar carrito.');
        this.closeCart.emit(); // Cierra el Sidenav
        // Opcional: podrías emitir un evento para vaciar el carrito en AppComponent
      }
    });
  }
}
