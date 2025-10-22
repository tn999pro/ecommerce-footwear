import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products: Product[] = [
  {
    id: "1",
    name: "Air Zoom Runner Pro",
    price: 459900,
    description:
      "Zapatillas de running de alto rendimiento con tecnología de amortiguación avanzada para carreras de larga distancia.",
    category: "running",
    images: [
      "/premium-white-running-shoe-with-orange-accents.jpg",
      "/premium-white-running-shoe-side-view.jpg",
      "/premium-white-running-shoe-back-view.jpg",
      "/premium-white-running-shoe-sole-detail.jpg",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Blanco/Naranja", "Negro/Rojo", "Azul/Blanco"],
    features: [
      "Tecnología Zoom Air en el antepié",
      "Upper transpirable de malla engineered",
      "Suela de goma con tracción multidireccional",
      "Peso: 280g (talla 42)",
    ],
    badge: "NUEVO",
  },
  {
    id: "2",
    name: "Ultra Boost Elite",
    price: 529900,
    description:
      "Máxima energía en cada paso. Diseñadas para runners que buscan el mejor retorno de energía y comodidad suprema.",
    category: "running",
    images: [
      "/black-running-shoe-with-white-boost-sole.jpg",
      "/black-running-shoe-side-profile.jpg",
      "/black-running-shoe-top-view.jpg",
      "/black-running-shoe-boost-technology.jpg",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Negro/Blanco", "Gris/Azul", "Blanco/Negro"],
    features: [
      "Tecnología Boost para retorno de energía",
      "Upper Primeknit adaptable",
      "Soporte Torsion System",
      "Suela Continental de alto agarre",
    ],
    badge: "BESTSELLER",
  },
  {
    id: "3",
    name: "Speed Flex 2024",
    price: 389900,
    description:
      "Velocidad y flexibilidad en una sola zapatilla. Perfectas para entrenamientos de velocidad y competiciones.",
    category: "running",
    images: [
      "/neon-green-running-shoe-lightweight.jpg",
      "/neon-green-running-shoe-side-view.jpg",
      "/neon-green-running-shoe-flex-technology.jpg",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Verde Neón", "Naranja", "Azul Eléctrico"],
    features: [
      "Diseño ultraligero (240g)",
      "Placa de fibra de carbono",
      "Upper sin costuras",
      "Ideal para competiciones",
    ],
    badge: "NUEVO",
  },
  {
    id: "4",
    name: "MetCon Training X",
    price: 419900,
    description:
      "Zapatillas de entrenamiento versátiles para CrossFit, levantamiento de pesas y entrenamientos de alta intensidad.",
    category: "training",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Negro/Rojo", "Gris/Naranja", "Blanco/Negro"],
    features: [
      "Base ancha para estabilidad",
      "Protección para cuerda en el lateral",
      "Talón firme para levantamientos",
      "Antepié flexible para movimientos dinámicos",
    ],
    badge: "BESTSELLER",
  },
  {
    id: "5",
    name: "Power Lift Pro",
    price: 449900,
    description: "Diseñadas específicamente para levantamiento de pesas con tacón elevado y máxima estabilidad.",
    category: "training",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Blanco/Dorado", "Negro/Plata", "Rojo/Negro"],
    features: [
      "Tacón elevado de 20mm",
      "Doble correa de sujeción",
      "Suela plana y rígida",
      "Upper de cuero sintético premium",
    ],
  },
  {
    id: "6",
    name: "HIIT Master",
    price: 369900,
    description:
      "Perfectas para entrenamientos de intervalos de alta intensidad con soporte y amortiguación equilibrados.",
    category: "training",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Azul/Blanco", "Negro/Verde", "Gris/Naranja"],
    features: [
      "Amortiguación reactiva",
      "Soporte lateral reforzado",
      "Suela con patrón multidireccional",
      "Transpirabilidad mejorada",
    ],
  },
  {
    id: "7",
    name: "Court Vision Elite",
    price: 499900,
    description:
      "Zapatillas de basketball de alto rendimiento con máximo soporte de tobillo y amortiguación responsiva.",
    category: "basketball",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Negro/Rojo", "Blanco/Azul", "Gris/Naranja"],
    features: [
      "Soporte de tobillo alto",
      "Amortiguación Zoom Air en talón y antepié",
      "Suela de goma con patrón de tracción herringbone",
      "Upper de malla y sintético reforzado",
    ],
    badge: "BESTSELLER",
  },
  {
    id: "8",
    name: "Hoop Master Low",
    price: 429900,
    description: "Versión de corte bajo para jugadores rápidos que priorizan la movilidad sin sacrificar soporte.",
    category: "basketball",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Blanco/Azul", "Negro/Amarillo", "Rojo/Blanco"],
    features: [
      "Diseño de corte bajo",
      "Peso reducido para velocidad",
      "Soporte lateral reforzado",
      "Amortiguación React foam",
    ],
  },
  {
    id: "9",
    name: "Dunk Pro Max",
    price: 549900,
    description: "Máxima protección y rendimiento para jugadores de alto impacto. Tecnología de amortiguación premium.",
    category: "basketball",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Negro/Plata", "Blanco/Oro", "Azul/Rojo"],
    features: [
      "Unidad Air Max visible en el talón",
      "Sistema de cordones Flywire",
      "Collar acolchado premium",
      "Suela de goma translúcida",
    ],
    badge: "NUEVO",
  },
  {
    id: "10",
    name: "Urban Classic",
    price: 329900,
    description: "Estilo atemporal con comodidad moderna. Perfectas para el día a día con un toque deportivo.",
    category: "lifestyle",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Blanco", "Negro", "Blanco/Verde"],
    features: ["Upper de cuero premium", "Diseño minimalista", "Suela de goma vulcanizada", "Plantilla acolchada"],
    badge: "BESTSELLER",
  },
  {
    id: "11",
    name: "Retro Wave",
    price: 359900,
    description: "Inspiradas en los clásicos de los 90 con colores vibrantes y silueta chunky moderna.",
    category: "lifestyle",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Multicolor", "Negro/Blanco", "Azul/Rosa"],
    features: [
      "Silueta chunky de moda",
      "Combinación de materiales premium",
      "Suela gruesa con amortiguación",
      "Detalles reflectantes",
    ],
  },
  {
    id: "12",
    name: "Slip-On Comfort",
    price: 289900,
    description: "Comodidad sin esfuerzo. Diseño slip-on con tecnología de espuma memory para todo el día.",
    category: "lifestyle",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Negro", "Gris", "Azul Marino"],
    features: ["Diseño sin cordones", "Plantilla de espuma memory", "Upper elástico y transpirable", "Suela flexible"],
  },
  {
    id: "13",
    name: "Trail Blazer X",
    price: 479900,
    description: "Conquista cualquier terreno con estas zapatillas de trail running con tracción agresiva.",
    category: "running",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Naranja/Negro", "Verde/Gris", "Azul/Amarillo"],
    features: [
      "Suela con tacos profundos",
      "Upper resistente al agua",
      "Protección en puntera y talón",
      "Amortiguación para terrenos irregulares",
    ],
  },
  {
    id: "14",
    name: "Street Style Pro",
    price: 339900,
    description: "Fusión perfecta entre estilo urbano y funcionalidad deportiva para el día a día.",
    category: "lifestyle",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Gris/Blanco", "Negro/Rojo", "Beige/Marrón"],
    features: ["Diseño versátil", "Materiales premium mixtos", "Suela de goma duradera", "Comodidad para todo el día"],
    badge: "NUEVO",
  },
  {
    id: "15",
    name: "Agility Trainer",
    price: 399900,
    description: "Entrenamiento funcional de alto nivel con soporte multidireccional y amortiguación adaptativa.",
    category: "training",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Negro/Amarillo", "Blanco/Azul", "Gris/Verde"],
    features: [
      "Soporte multidireccional",
      "Amortiguación adaptativa",
      "Upper transpirable reforzado",
      "Suela con grip 360°",
    ],
  },
];
constructor() {}

getProducts(): Product[] {
  return this.products;
}

getProductById(id: string): Product | undefined {
  return this.products.find(product => product.id === id);
}

//Metodo para devolver los mas vendidos 
getBestSellers(): Product[] {
  return this.products.filter(product => product.badge === 'BESTSELLER').slice(0, 4);
}


}
