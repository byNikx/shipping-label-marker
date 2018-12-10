import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';
const ModuleCollection = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule
];
@NgModule({
  imports: [...ModuleCollection],
  exports: [...ModuleCollection],
})
export class MaterialModule { }
