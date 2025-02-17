import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wohnplattform',
  templateUrl: './wohnplattform.component.html',
  styleUrls: ['./wohnplattform.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule] // Hier TranslateModule importieren
})
export class WohnplattformComponent {}