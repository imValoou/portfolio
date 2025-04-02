import { AfterViewInit, Component, HostListener, Input } from '@angular/core';

import { PfCommonModule } from '../../../common.module';
import { ButtonComponent } from '../../library/button/button.component';

@Component({
  selector: 'pf-header',
  imports: [PfCommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @Input() toggleBanner?: boolean;
  hasScrolled: boolean = false;

  pages: { name: string; path: string; icon?: string }[] = [
    { name: 'Catalog', path: '/catalog' },
    { name: 'About me', path: '/who-am-i' },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Cart',
      path: '/cart',
      icon: '/icons/cart.svg',
    },
  ];

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (window.scrollY > 100) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && window?.scrollY > 100)
      this.hasScrolled = true;
  }
}
