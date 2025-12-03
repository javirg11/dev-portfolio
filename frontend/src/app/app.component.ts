import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,
    RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-angular';
  currentLang = 'es';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en', 'de']);
    this.translate.setDefaultLang('es');

    const browserLang = this.translate.getBrowserLang();
    const lang = browserLang && ['es', 'en', 'de'].includes(browserLang) ? browserLang : 'es';

    this.currentLang = lang;
    this.translate.use(lang);
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // opcional: recordar idioma
  }
}
