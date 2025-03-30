import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterLink],
  exports: [CommonModule, RouterLink],
})
export class PfCommonModule {}
