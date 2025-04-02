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
    { name: 'html', logo: '/images/techstack/logo-html.png' },
    { name: 'css', logo: '/images/techstack/logo-css.png' },
    { name: 'js', logo: '/images/techstack/logo-js.png' },
    { name: 'ts', logo: '/images/techstack/logo-ts.png' },
    { name: 'firebase', logo: '/images/techstack/logo-firebase.png' },
    { name: 'angular', logo: '/images/techstack/logo-angular.png' },
    { name: 'react', logo: '/images/techstack/logo-react.png' },
    { name: 'nuxt', logo: '/images/techstack/logo-nuxt.png' },
    { name: 'php', logo: '/images/techstack/logo-php.png' },
    { name: 'kotlin', logo: '/images/techstack/logo-kotlin.png' },
    { name: 'copilot', logo: '/images/techstack/logo-copilot.png' },
    { name: 'svelte', logo: '/images/techstack/logo-svelte.png' },
    { name: 'tailwind css', logo: '/images/techstack/logo-tailwind.png' },
    { name: 'bootstrap', logo: '/images/techstack/logo-bootstrap.png' },
    { name: 'webgl', logo: '/images/techstack/logo-webgl.png' },
    { name: '3js', logo: '/images/techstack/logo-3js.png' },
  ];
}
