import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Store } from './store';

@Component({
	selector: 'root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'portfolio';
	private store = inject(Store);
	private translate = inject(TranslateService);

	constructor() {
		this.setCurrentLang();
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet?.activatedRouteData?.['animation'];
	}

	setCurrentLang() {
		this.store.setLang(this.getBrowserLang());
	}

	getBrowserLang(): string {
		return (
			this.translate.getBrowserLang()?.toLocaleLowerCase() ??
			this.translate.getDefaultLang().toLocaleLowerCase()
		);
	}
}
