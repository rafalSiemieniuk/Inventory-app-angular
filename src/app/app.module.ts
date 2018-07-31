import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentMenuComponent } from './menu/content-menu/content-menu.component';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuService } from './menu/menu.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './core/auth.service';
import { AuthInterceptor } from './core/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [
    AppComponent,
    ContentMenuComponent,
    SideMenuComponent,
    MenuComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  exports: [
    OnsenModule,
  ],
  imports: [
    BrowserModule, OnsenModule, AppRouting, HttpClientModule, FormsModule, ProfileModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [SideMenuComponent, ContentMenuComponent],
  providers: [
    MenuService,
    AuthenticationGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
