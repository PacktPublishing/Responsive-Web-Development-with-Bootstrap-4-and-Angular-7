import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatCardModule, MatDividerModule],
  exports: [MatCardModule, MatDividerModule],
})
export class MaterialModule { }
