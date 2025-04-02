import { Component } from '@angular/core';

import { PfCommonModule } from '../../../common.module';
import { routes } from '../../app.routes'; // Import des routes

@Component({
  selector: 'pf-footer',
  imports: [PfCommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  // Filtrer les routes pour exclure les redirections ou les routes spéciales
  pages: { name: string; path: string }[] = routes
    .filter((route) => route.path && route.path !== '**') // Exclut les routes sans chemin ou les redirections
    .map((route) => ({
      name: this.formatRouteName(route.path || 'Home'), // Formate le nom de la page
      path: `/${route.path || ''}`, // Ajoute un '/' au chemin
    }));

  // Méthode pour formater les noms des routes
  private formatRouteName(path: string): string {
    if (path === '') return 'Home'; // Nom pour la route d'accueil
    return path
      .split('-') // Sépare les mots par les tirets
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalise chaque mot
      .join(' '); // Rejoint les mots avec un espace
  }
}
