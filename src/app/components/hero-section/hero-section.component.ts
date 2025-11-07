import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
// Importa los módulos de Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselImagesComponent } from '../carousel-images/carousel-images.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CarouselImagesComponent
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Output() exploreClick = new EventEmitter<void>();
  @Output() offersClick = new EventEmitter<void>();

  slides = [
    {
      id: 0,
      imageUrl: 'assets/premium-athletic-running-shoe-floating-on-white-ba.jpg',
      alt: 'Premium Athletic Running Shoe'
    },
    {
      id: 1,
      imageUrl: 'assets/basketball-shoes-on-court.jpg',
      alt: 'Modern Basketball Shoe'
    },
    {
      id: 2,
      imageUrl: 'assets/neon-green-running-shoe-side-view.jpg',
      alt: 'Neon Green Running Shoe'
    }
  ];
}
