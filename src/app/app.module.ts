import { ShellComponent } from './components/shell/shell.component';
import { LoadingService } from './components/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiUtil } from './services/ApiUtil';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [LoadingService, ApiUtil],
  bootstrap: [ShellComponent]
})
export class AppModule { }
