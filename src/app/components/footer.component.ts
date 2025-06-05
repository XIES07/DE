import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-light border-top">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>Participantes</h5>
<ul>
            <li>Daniela Giraldo - daniela.gorozco&#64;udea.edu.co</li>
                <li>Mauricio Gutierrez - mauricio.gutierreza&#64;udea.edu.co</li>
                <li>Laura Garcia - laurai.garcia1&#64;udea.edu.co</li>
              </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Desarrollador</h5>
           <ul>
            <li>Julian Andres Vargas</li>
              </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Contacto</h5>
            <ul class="list-unstyled text-muted small">
              <li>Email: javsaz2009&#64;gmail.com</li>
              <li>Teléfono: +57 3137854717</li>
            </ul>
          </div>
        </div>
        <div class="text-center text-muted pt-3 small">
          &copy; {{ currentYear }} - discapacitando el estigma. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}