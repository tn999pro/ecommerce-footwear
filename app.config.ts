// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Si usarás rutas
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Importa tus rutas si las tienes (por ahora vacío)
// import { routes } from './app.routes'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // provideRouter(routes), // Descomenta si tienes rutas
    provideAnimationsAsync() // Necesario para Angular Material Animations
  ]
};