import { Component } from '@angular/core';

import { PfCommonModule } from '../../../common.module';
import { ButtonComponent } from '../../library/button/button.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'pf-home',
  imports: [HeaderComponent, PfCommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projects: {
    name: string;
    description: string;
    image: string;
    path: string;
  }[] = [
    {
      name: 'Freams',
      description:
        'An Airbnb-style app with a community focus, perfect for backpackers',
      image: '/images/projects/freams.jpg',
      path: '/catalog/freams',
    },
    {
      name: 'Calorie counter',
      description:
        'AA simple web app to log your daily meals and track your calorie intake',
      image: '/images/projects/calorie-counter.jpg',
      path: '/catalog/calorie-counter',
    },
    {
      name: 'Spotify clone',
      description:
        'A remake of Spotify, just to rethink and improve its interface',
      image: '/images/projects/spotify-clone.jpg',
      path: '/catalog/spotify-clone',
    },
  ];

  skills: { name: string; logo: string }[] = [
    { name: 'html', logo: '/images/logo-html.png' },
    { name: 'css', logo: '/images/logo-css.png' },
    { name: 'js', logo: '/images/logo-js.png' },
    { name: 'ts', logo: '/images/logo-ts.png' },
    { name: 'firebase', logo: '/images/logo-firebase.png' },
    { name: 'angular', logo: '/images/logo-angular.png' },
    { name: 'react', logo: '/images/logo-react.png' },
    { name: 'nuxt', logo: '/images/logo-nuxt.png' },
    { name: 'php', logo: '/images/logo-php.png' },
    { name: 'kotlin', logo: '/images/logo-kotlin.png' },
  ];
}
