import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
// Importa los módulos de Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  // Eventos de salida
  @Output() exploreClick = new EventEmitter<void>();
  @Output() offersClick = new EventEmitter<void>();
}
