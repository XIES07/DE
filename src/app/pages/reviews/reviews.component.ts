import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  // Lista de testimonios (puedes cambiarla por datos dinámicos después)
  testimonials = [
    {
      name: 'María López',
      role: 'Madre de un beneficiario',
      comment: 'Gracias a esta fundación, mi hijo ha encontrado un espacio donde es valorado por quien es. ¡Hacen una diferencia real!',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Voluntario desde 2022',
      comment: 'Ser parte de este proyecto me ha enseñado el verdadero significado de la empatía y la acción social.',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Laura Fernández',
      role: 'Educadora especial',
      comment: 'La sensibilización que promueven es clave para construir escuelas más inclusivas. ¡Felicidades por su trabajo!',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      name: 'Javier Torres',
      role: 'Beneficiario directo',
      comment: 'Aquí encontré amigos de verdad y aprendí a no tener miedo de ser yo mismo. Gracias por creer en mí.',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
      name: 'Sofía Ramírez',
      role: 'Trabajadora social',
      comment: 'Un equipo comprometido y lleno de amor. Siempre dispuestos a ayudar sin juzgar. ¡Un ejemplo a seguir!',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'Andrés Gómez',
      role: 'Donante recurrente',
      comment: 'Confío plenamente en su transparencia y dedicación. Mi apoyo económico vale la pena aquí.',
      avatar: 'https://i.pravatar.cc/150?img=6'
    }
  ];
}