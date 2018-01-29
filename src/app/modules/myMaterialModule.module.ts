import { NgModule } from '@angular/core';

import {//MaterialModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDatepickerModule, MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  // imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatDialogModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatDialogModule, MatSelectModule],
})
export class MyMaterialModuleModule { }
