import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class KontaktComponent {
  currentLang: string = 'de';

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('language') || 'de';
    this.translate.use(this.currentLang);

    //  Automatische Aktualisierung bei Sprachwechsel
    this.translate.onLangChange.subscribe((event) => {
      console.log('Neue Sprache in Kontakt:', event.lang);
      this.currentLang = event.lang;
    });
  }
}