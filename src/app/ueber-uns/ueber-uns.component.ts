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

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  navigateToVermieter(): void {
    window.open('https://vermietsicher.de/vermietertipps#Mietpreis', '_blank');
  }

  navigateToMieter(): void {
    window.open('https://www.studierendenwerke.de/beitrag/illustriertes-wohnheimwoerterbuch-3', '_blank');
  }

  navigateToKontakt(): void {
    this.router.navigate(['/kontakt']);
  }
}
