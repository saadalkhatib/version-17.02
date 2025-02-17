import { Component, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class MapComponent implements OnChanges {
  private map: L.Map | undefined;
  currentLang: string = 'de';

  constructor(private translate: TranslateService) { 
    this.currentLang = localStorage.getItem('language') || 'de';
    this.translate.use(this.currentLang);

    // Aktualisiert die Karte, wenn sich die Sprache ändert
    this.translate.onLangChange.subscribe((event) => {
      console.log('Neue Sprache in Map:', event.lang);
      this.currentLang = event.lang;
    });
  }

  @Input() angebote: { titel: string; lat: number; lon: number }[] = [];

  ngOnChanges(): void {
    if (!this.map) {
      this.initializeMap();
    }
    this.addMarkers();
  }

  private initializeMap(): void {
    this.map = L.map('map').setView([52.0275, 8.9287], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarkers(): void {
    if (!this.map) return;

    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        this.map!.removeLayer(layer);
      }
    });

    this.angebote.forEach((angebot) => {
      L.marker([angebot.lat, angebot.lon])
        .addTo(this.map!)
        .bindPopup(`<b>${angebot.titel}</b>`);
    });
  }

  // ✅ `searchAddress()` Methode mit Übersetzung
  searchAddress(address: string): void {
    if (!address.trim()) {
      alert(this.translate.instant("SEARCH_ERROR"));
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const result = data[0];
          const lat = parseFloat(result.lat);
          const lon = parseFloat(result.lon);

          if (this.map) {
            this.map.setView([lat, lon], 15);
            L.marker([lat, lon])
              .addTo(this.map)
              .bindPopup(this.translate.instant("SEARCH_RESULT") + `: ${result.display_name}`)
              .openPopup();
          }
        } else {
          alert(this.translate.instant("SEARCH_NO_RESULTS"));
        }
      })
      .catch(error => console.error(this.translate.instant("SEARCH_ERROR_FETCH"), error));
  }
}
