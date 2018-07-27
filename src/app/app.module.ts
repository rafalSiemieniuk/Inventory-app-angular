import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileModule } from './modules/profile.module/profile.module';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentMenuComponent } from './menu/content-menu/content-menu.component';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuService } from './menu/menu.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    ContentMenuComponent,
    SideMenuComponent,
    MenuComponent,
    AppComponent,
    PageNotFoundComponent,
  ],
  exports: [
    OnsenModule,

  ],
  imports: [
    BrowserModule, OnsenModule, ProfileModule, AppRouting
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
