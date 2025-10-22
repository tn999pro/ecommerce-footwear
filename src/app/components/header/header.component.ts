import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
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
