import {
	ApplicationConfig,
	importProvidersFrom,
	provideZoneChangeDetection,
} from '@angular/core';
import {
	provideClientHydration,
	withEventReplay,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

import { AppCommonModule } from './app.common.module';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideTranslateService({
			defaultLanguage: 'en',
		}),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		importProvidersFrom(AppCommonModule),
	],
};
