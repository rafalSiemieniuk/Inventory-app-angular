import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuComponent } from './menu/menu.component';
import {MenuService} from "./menu.service";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@NgModule({
  declarations: [
    AppComponent,
    ContentMenuComponent,
    SideMenuComponent,
    MenuComponent,
  ],
  exports: [
    OnsenModule,

  ],
  imports: [
    BrowserModule,
    OnsenModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [SideMenuComponent, ContentMenuComponent],
  providers: [MenuService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
