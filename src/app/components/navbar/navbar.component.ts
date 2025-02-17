import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule] // TranslateModule importiert!
})
export class NavbarComponent {
  currentLanguage: string = 'de';
  dropdownOpen: boolean = false; // Steuert das Dropdown

  constructor(private translate: TranslateService) {
    this.currentLanguage = localStorage.getItem('language') || 'de';
    this.translate.use(this.currentLanguage);

    //  Überwacht Sprachwechsel & aktualisiert das Menü
    this.translate.onLangChange.subscribe((event) => {
      console.log('Neue Sprache in Navbar:', event.lang);
      this.currentLanguage = event.lang;
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);  // Ändert die Sprache
    localStorage.setItem('language', lang); // Speichert die Sprache
  }  

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.language-dropdown')) {
      this.dropdownOpen = false; // Schließt das Menü, wenn außerhalb geklickt wird
    }
  }
}
