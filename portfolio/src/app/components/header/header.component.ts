import { Component, inject } from '@angular/core';
import { AppCommonModule } from '@app/app.common.module';
import { Store } from '@app/store';

@Component({
	selector: 'pf-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	imports: [AppCommonModule],
})
export class HeaderComponent {
	store = inject(Store);

	currentLang = 'en';

	constructor() {
		this.store.lang.subscribe((lang) => {
			this.currentLang = lang;
		});
	}

	switchLang() {
		this.store.setLang(this.currentLang === 'en' ? 'fr' : 'en');
	}
}
