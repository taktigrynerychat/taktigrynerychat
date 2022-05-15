import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuiButtonComponent } from './button.component';

@NgModule({
  declarations: [JuiButtonComponent],
  imports: [CommonModule],
  exports: [
    JuiButtonComponent,
  ],
})
export class JuiButtonModule {}
