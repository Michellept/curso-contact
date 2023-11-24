import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  exports: [
    MatSnackBarModule,

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-MX' }],
})
export class MaterialModule {}
