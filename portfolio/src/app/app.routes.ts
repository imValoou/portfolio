import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LanguageComponent } from './components/language/language.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
	{
		path: 'interfaces',
		component: InterfacesComponent,
		data: { animation: 'interfaces' },
	},
	{
		path: 'projects',
		component: ProjectsComponent,
		data: { animation: 'projects' },
	},
	{
		path: 'jobs',
		component: JobsComponent,
		data: { animation: 'jobs' },
	},
	{
		path: 'language',
		component: LanguageComponent,
		data: { animation: 'language' },
	},
	{
		path: '',
		component: HomeComponent,
		data: { animation: 'home' },
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
