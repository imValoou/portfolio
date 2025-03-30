import { Component, Input } from '@angular/core';

import { PfCommonModule } from '../../../common.module';

@Component({
  selector: 'pf-button',
  imports: [PfCommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: 'primary' | 'accent' = 'primary';
}
