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
      imageUrl: 'assets/modern-basketball-shoe-premium-design.jpg',
      alt: 'Modern Basketball Shoe'
    },
    {
      id: 2,
      imageUrl: 'assets/urban-street-style-sneaker-premium.jpg',
      alt: 'Urban Street Style Sneaker'
    }
  ];

  currentSlide = 0;
  private autoplayInterval: any;
  private readonly intervalTime = 5000;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  pauseCarousel() {
    this.stopAutoplay();
  }

  resumeCarousel() {
    this.startAutoplay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.slides.length - 1 
      : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
