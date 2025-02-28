import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NavbarComponent, TranslateModule]
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const browserLang = localStorage.getItem('language') || 'de';
    this.translate.use(browserLang);

    //  Überwache Sprachwechsel, um das ganze Layout zu aktualisieren
    this.translate.onLangChange.subscribe(() => {
      console.log('Sprache geändert, Seite wird aktualisiert!');
    });
  }
}
