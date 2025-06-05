import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  searchQuery = '';
  filters = {
    topic: '',
    region: '',
    language: ''
  };

  availableTopics = [
    'Educación especial',
    'Inclusión laboral',
    'Derechos de personas con discapacidad',
    'Discapacidad intelectual',
    'Intervención temprana'
  ];

  availableRegions = [
    'Global',
    'Latinoamérica',
    'España',
    'Norteamérica'
  ];

  availableLanguages = [
    'es', // Español
    'en'  // Inglés
  ];

  googleSearchUrl = '';

  performSearch(): void {
    const baseQuery = this.searchQuery.trim();
    const selectedTopic = this.filters.topic;
    const selectedRegion = this.filters.region;
    const selectedLang = this.filters.language;

    let keywords = baseQuery;

    if (selectedTopic) keywords += ` "${selectedTopic}"`;
    if (selectedRegion && selectedRegion !== 'Global') keywords += ` "${selectedRegion}"`;

    const langParam = selectedLang ? `&lr=lang_${selectedLang}` : '';

    this.googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      keywords
    )}${langParam}`;

    window.open(this.googleSearchUrl, '_blank');
  }
}