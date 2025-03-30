import { Component } from '@angular/core';

import { PfCommonModule } from '../../../common.module';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'pf-home',
  imports: [HeaderComponent, PfCommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
