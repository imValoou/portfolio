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
}
