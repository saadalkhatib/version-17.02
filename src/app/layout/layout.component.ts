import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule]
})
export class LayoutComponent {
  currentLang: string = 'de';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language'); 
    if (savedLang) {
      this.currentLang = savedLang;
      this.translate.use(savedLang);
    }

    this.translate.onLangChange.subscribe((event) => {
      console.log('Neue Sprache in Layout:', event.lang);
      this.currentLang = event.lang;
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang); // 🔥 Speichert die Sprache für zukünftige Besuche
  }
}
