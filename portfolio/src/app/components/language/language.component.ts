// import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@app/store';

@Component({
	selector: 'pf-language',
	imports: [],
	templateUrl: './language.component.html',
	styleUrl: './language.component.scss',
})
export class LanguageComponent {
	private store = inject(Store);
	// private location = inject(Location);

	selectLang(lang: string) {
		this.store.setLang(lang);
		// this.location.back();
	}
}
