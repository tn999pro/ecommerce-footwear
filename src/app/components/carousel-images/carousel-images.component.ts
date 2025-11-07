import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Slide {
  id: number;
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-carousel-images',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './carousel-images.component.html',
  styleUrl: './carousel-images.component.css'
})
export class CarouselImagesComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Input() intervalTime: number = 5000; // Default interval time
  @Output() slideChange = new EventEmitter<number>();

  currentSlide = 0;
  private autoplayInterval: any;

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
    this.slideChange.emit(this.currentSlide);
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0
      ? this.slides.length - 1
      : this.currentSlide - 1;
    this.slideChange.emit(this.currentSlide);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.slideChange.emit(this.currentSlide);
  }
}
