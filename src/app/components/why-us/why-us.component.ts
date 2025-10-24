import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
features = [
    {
      icon: 'local_shipping', // Equivalente a Truck
      title: "Envío Gratis",
      description: "En compras superiores a $200.000",
    },
    {
      icon: 'verified_user', // Equivalente a Shield
      title: "Garantía de Calidad",
      description: "100% productos originales",
    },
    {
      icon: 'change_circle', // Equivalente a RotateCcw
      title: "Devoluciones Fáciles",
      description: "30 días para cambios y devoluciones",
    },
    {
      icon: 'headset_mic', // Equivalente a Headphones
      title: "Soporte 24/7",
      description: "Estamos aquí para ayudarte",
    },
  ];
}
