import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MATERIAL_COMPATIBILITY_MODE,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  declarations: []
})
export class MaterialModule { }