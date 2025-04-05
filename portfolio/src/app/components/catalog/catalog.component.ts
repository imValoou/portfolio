import { Component, inject, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { PfCommonModule } from '../../../common.module';

@Component({
  selector: 'pf-catalog',
  imports: [PfCommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  skills = [
    { name: 'html', logo: '/images/techstack/logo-html.png' },
    { name: 'css', logo: '/images/techstack/logo-css.png' },
    { name: 'js', logo: '/images/techstack/logo-js.png' },
    { name: 'ts', logo: '/images/techstack/logo-ts.png' },
    { name: 'angular', logo: '/images/techstack/logo-angular.png' },
    { name: 'firebase', logo: '/images/techstack/logo-firebase.png' },
    { name: 'nuxt', logo: '/images/techstack/logo-nuxt.png' },
    { name: 'php', logo: '/images/techstack/logo-php.png' },
    { name: 'kotlin', logo: '/images/techstack/logo-kotlin.png' },
    { name: 'svelte', logo: '/images/techstack/logo-svelte.png' },
    { name: 'tailwind', logo: '/images/techstack/logo-tailwind.png' },
  ];

  projects: {
    name: string;
    tags: string[];
    url: string;
    customCss?: { [key: string]: string };
  }[] = [
    {
      name: 'Freams',
      tags: ['angular', 'firebase', 'html', 'css', 'ts', 'js'],
      url: 'https://freams-3b9ea.web.app/',
      customCss: { 'max-width': '420px', 'border-radius': '10px' },
    },
    {
      name: 'Calories Counter',
      tags: ['react', 'firebase', 'html', 'css', 'ts', 'js'],
      url: 'https://example.com/calories-counter',
    },
    {
      name: 'Spotify Clone',
      tags: ['nuxt', 'html', 'tailwind', 'ts', 'firebase', 'js'],
      url: 'https://example.com/spotify-clone',
    },
    {
      name: 'Projet Svelte',
      tags: ['svelte', 'tailwind', 'html', 'css', 'ts', '3js', 'js'],
      url: 'https://example.com/svelte',
    },
    {
      name: 'Projet Kotlin',
      tags: ['kotlin', 'tailwind'],
      url: 'https://example.com/kotlin',
    },
  ];

  activeFilters: string[] = [];
  filteredProjects = this.projects;
  selectedProject?: {
    name: string;
    tags: string[];
    url: string;
    customCss?: { [key: string]: string };
  };

  projectName?: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.projectName = params['project-name'];
    });
    this.selectedProject = this.projects.find(
      (project) =>
        project.name.toLocaleLowerCase() ===
        this.projectName?.toLocaleLowerCase()
    );
    console.log(this.selectedProject);
  }

  toggleFilter(skillName: string) {
    console.log(this.projectName);
    if (this.activeFilters.includes(skillName)) {
      this.activeFilters = this.activeFilters.filter(
        (name) => name !== skillName
      );
    } else {
      this.activeFilters.push(skillName);
    }
    this.filterProjects();
  }

  filterProjects() {
    if (this.activeFilters.length === 0) {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        project.tags.some((tag) => this.activeFilters.includes(tag))
      );
    }
  }

  selectProject(project: { name: string; tags: string[]; url: string }) {
    this.selectedProject = project;
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/valentinbenedet/', '_blank');
  }

  get sanitizedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.sanitizer.sanitize(
        SecurityContext.URL,
        this.selectedProject?.url || ''
      ) || ''
    );
  }
}
