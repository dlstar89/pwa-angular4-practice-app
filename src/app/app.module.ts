import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageInfoComponent } from './pages/pageInfo/pageInfo.component';
import { PageHomeComponent } from './pages/pageHome/pageHome.component';
import { ShellComponent } from './components/shell/shell.component';
import { LoaderComponent, LoadingService } from './components/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiUtil } from './services/ApiUtil';
import { routing } from './app.routing';
import { GeneralUtilsService } from './services/generalUtils.service';

@NgModule({
  declarations: [
    ShellComponent,
    PageHomeComponent,
    PageInfoComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [LoadingService, ApiUtil, GeneralUtilsService],
  bootstrap: [ShellComponent]
})
export class AppModule { }
