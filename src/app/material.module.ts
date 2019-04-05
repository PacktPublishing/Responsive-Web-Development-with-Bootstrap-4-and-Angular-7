import { NgModule } from '@angular/core';
import {
  MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
    MatFormFieldModule, MatInputModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
    MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }
