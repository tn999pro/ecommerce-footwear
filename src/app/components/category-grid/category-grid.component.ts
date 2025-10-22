import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.css'
})
export class CategoryGridComponent {
// Emite el 'id' de la categoría cuando se selecciona una
  @Output() categorySelect = new EventEmitter<string>();

  // Migramos la data, actualizando las rutas de las imágenes a /assets/
  categories = [
    {
      id: "running",
      name: "Running",
      image: "assets/running-shoes-on-track.jpg",
    },
    {
      id: "training",
      name: "Training",
      image: "assets/training-shoes-in-gym.jpg",
    },
    {
      id: "basketball",
      name: "Basketball",
      image: "assets/basketball-shoes-on-court.jpg",
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      image: "assets/casual-lifestyle-sneakers.jpg",
    },
  ];

  // Función que se llama desde la plantilla
  onCategoryClick(id: string): void {
    this.categorySelect.emit(id);
  }
}
