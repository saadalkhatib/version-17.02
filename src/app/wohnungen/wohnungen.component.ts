import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wohnungen',
  templateUrl: './wohnungen.component.html',
  styleUrls: ['./wohnungen.component.css'],
  standalone: true,
  imports: [CommonModule, MapComponent, TranslateModule]
})
export class WohnungenComponent {
  maxMiete: number = 1000;

  angebote = [
    {
      bild: 'assets/images/BeispielBildWohnhaus1.jpg',
      titel: 'Moderne Wohnung in der Innenstadt',
      beschreibung: '2 Schlafzimmer, 1 Badezimmer, 80 m².',
      preis: 1200,
      link: '#',
      lat: 52.0275,
      lon: 8.9287
    },
    {
      bild: 'assets/images/BeispielBildWohnhaus1.jpg',
      titel: 'Gemütliche Wohnung am Stadtrand',
      beschreibung: '3 Schlafzimmer, 2 Badezimmer, 120 m².',
      preis: 950,
      link: '#',
      lat: 52.0266,
      lon: 8.9349
    },
    {
      bild: 'assets/images/BeispielBildWohnhaus1.jpg',
      titel: 'Luxus-Apartment mit Balkon',
      beschreibung: '4 Schlafzimmer, 3 Badezimmer, 200 m².',
      preis: 3000,
      link: '#',
      lat: 52.0302,
      lon: 8.9202
    }
  ];

  get gefilterteAngebote() {
    return this.angebote.filter(angebot => angebot.preis <= this.maxMiete);
  }

  updateMaxMiete(event: any): void {
    this.maxMiete = +event.target.value;
  }
}
