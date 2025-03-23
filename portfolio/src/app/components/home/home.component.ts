import { Component } from '@angular/core';

import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
	selector: 'pf-home',
	imports: [MainMenuComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
