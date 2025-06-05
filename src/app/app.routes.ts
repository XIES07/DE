import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ResearchComponent } from './pages/research/research.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'reviews', component: ReviewsComponent },

  // Redirección por defecto (opcional)
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];