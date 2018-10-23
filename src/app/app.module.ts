import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {SettingsComponent} from './settings/settings.component';
import {SupportComponent} from './support/support.component';
import {SignoutComponent} from './signout/signout.component';
import {FooterComponent} from './footer/footer.component';
import {LegalComponent} from './legal/legal.component';
import {AppRouting} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    SettingsComponent,
    SupportComponent,
    SignoutComponent,
    FooterComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
