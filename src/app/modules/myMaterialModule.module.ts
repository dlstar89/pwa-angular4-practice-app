import { NgModule } from '@angular/core';

import {MaterialModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdDatepickerModule, MdNativeDateModule,
        MdInputModule,
        MdDialogModule} from '@angular/material';


@NgModule({
  imports: [MaterialModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdDialogModule],
  exports: [MaterialModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdDialogModule],
})
export class MyMaterialModuleModule { }
