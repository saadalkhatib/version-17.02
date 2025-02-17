import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-anmelden',
  templateUrl: './anmelden.component.html',
  styleUrls: ['./anmelden.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class AnmeldenComponent {
  currentLang: string = 'de';

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('language') || 'de';
    this.translate.use(this.currentLang);

    //  Automatische Aktualisierung bei Sprachwechsel
    this.translate.onLangChange.subscribe((event) => {
      console.log('Neue Sprache in Anmelden:', event.lang);
      this.currentLang = event.lang;
    });
  }
}