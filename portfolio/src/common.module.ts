import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  exports: [CommonModule, RouterLink, FontAwesomeModule],
})
export class PfCommonModule {}
