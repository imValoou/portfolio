import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

import { Store } from './store';

@NgModule({
	imports: [RouterLink, CommonModule, TranslatePipe, TranslateDirective],
	exports: [RouterLink, CommonModule, TranslatePipe, TranslateDirective],
	providers: [Store],
})
export class AppCommonModule {}
