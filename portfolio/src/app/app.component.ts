import { filter } from 'rxjs';

import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  activeRoute: string = '';
  toggleBanner: boolean = false;

  constructor(private router: Router) {
    // Écoute les changements de route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeRoute = event.urlAfterRedirects.split('/')[1] || 'home'; // Récupère la route active
        this.toggleBanner = this.activeRoute === 'home'; // Active le banner si la route est 'home'
      });
  }
}
