import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule],
})
export class MaterialModule { }
