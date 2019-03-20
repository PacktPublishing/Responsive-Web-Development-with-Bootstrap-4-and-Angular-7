import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule],
})
export class MaterialModule { }
