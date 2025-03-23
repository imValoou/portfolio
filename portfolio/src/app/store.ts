import { BehaviorSubject } from 'rxjs';

import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class Store {
	translate = inject(TranslateService);
	lang: BehaviorSubject<string> = new BehaviorSubject('en');

	setLang(lang: string) {
		this.lang.next(lang);
		this.translate.use(lang);
	}
}
