import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './header.Component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Propiedad de entrada (reemplaza a las props)
  @Input() cartItemsCount: number = 0;

  // Evento de salida (reemplaza a la prop de función)
  @Output() cartClick = new EventEmitter<void>();

  isMenuOpen = false;

  // Función que se llama desde la plantilla para emitir el evento
  onCartClick(): void {
    this.cartClick.emit();
  }
}
