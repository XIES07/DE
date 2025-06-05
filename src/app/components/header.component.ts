import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
     <a class="navbar-brand" href="#">
  <img src="../../assets/logo/logo.avif" alt="Logo" width="50">
     </a>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('/home')">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('/research')">Directorio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateTo('/reviews')">Comentarios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .active {
      font-weight: bold;
      color: #2e722ef1 !important;
    }
    .nav-item:hover {
      cursor: pointer;
    }
  `]
})
export class HeaderComponent {
  navigateTo(path: string) {
    window.location.href = path;
  }
}