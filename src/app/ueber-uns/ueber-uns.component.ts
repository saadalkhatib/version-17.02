import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ueber-uns',
  templateUrl: './ueber-uns.component.html',
  styleUrls: ['./ueber-uns.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class UeberUnsComponent {
  currentLang: string = 'de';

  constructor(private router: Router, private translate: TranslateService) {
    this.currentLang = localStorage.getItem('language') || 'de';
    this.translate.use(this.currentLang);

    // Aktualisiert den Text, wenn sich die Sprache ändert
    this.translate.onLangChange.subscribe((event) => {
      console.log('Neue Sprache in Über Uns:', event.lang);
      this.currentLang = event.lang;
    });
  }

  navigateToKontakt(): void {
    this.router.navigate(['/kontakt']);
  }
}