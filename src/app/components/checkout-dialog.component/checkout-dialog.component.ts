import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { formatCurrency } from '../../utils/format';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-checkout-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './checkout-dialog.component.html',
  styleUrl: './checkout-dialog.component.css'
})
export class CheckoutDialogComponent {

  formData = {
    name: '',
    phone: '',
    email: '',
    address: ''
  };
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor(
    public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cartItems: CartItem[], subtotal: number, tax: number, total: number }
  ) {
    this.cartItems = data.cartItems;
    this.subtotal = data.subtotal;
    this.tax = data.tax;
    this.total = data.total;
  }
  // Función para formatear moneda
  formatPrice(price: number): string {
    return formatCurrency(price);
  }
  // Lógica para generar el mensaje y abrir WhatsApp
  openWhatsApp(): void {
    if (!this.formData.name || !this.formData.phone || !this.formData.email || !this.formData.address) {
      alert('Completa todos los campos');
      return;
    }
    // Aquí iría el resto de la lógica para generar el mensaje y abrir WhatsApp
    const invoiceNumber = `INV-${Date.now()}\n\n`;
    const date =new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
    let message = `🏃‍♂️ *COTIZACIÓN KR-SPORTS SPORTS*\n\n`;
    message += `📋 *Número:* ${invoiceNumber}\n`;
    message += `📅 *Fecha:* ${date}\n\n`;
    message += `👤 *DATOS DEL CLIENTE*\n`;
    message += `Nombre: ${this.formData.name}\n`;
    message += `Teléfono: ${this.formData.phone}\n`;
    message += `Email: ${this.formData.email}\n`;
    if (this.formData.address) {
      message += `Dirección: ${this.formData.address}\n`;
    }
    message += `\n📦 *PRODUCTOS*\n\n`;

    this.cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Talla: ${item.size} | Color: ${item.color}\n`;
      message += `   Cantidad: ${item.quantity} x ${formatCurrency(item.price)}\n`;
      message += `   Subtotal: ${formatCurrency(item.price * item.quantity)}\n\n`;
    });

    message += `💰 *RESUMEN*\n`;
    message += `Subtotal: ${formatCurrency(this.subtotal)}\n`;
    message += `IVA (19%): ${formatCurrency(this.tax)}\n`;
    message += `*TOTAL: ${formatCurrency(this.total)}*\n\n`;
    message += `💳 *Métodos de Pago*\n`;
    message += `• Transferencia bancaria\n`;
    message += `• Tarjeta de crédito/débito\n`;
    message += `• Efectivo contra entrega\n\n`;
    message += `📞 *Contacto*\n`;
    message += `WhatsApp: +57 300 123 4567\n`;
    message += `Email: ventas@KR-SPORTSsports.com\n\n`;
    message += `✅ Envío gratis en compras superiores a $200.000\n`;
    message += `🔄 30 días de garantía\n`;

    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Cerrar el modal y opcionalmente devolver un estado
    this.dialogRef.close('submitted');
  }

  // Cerrar el modal
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
