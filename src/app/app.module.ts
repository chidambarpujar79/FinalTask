import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule} from '@angular/common/http';
import { SearcharticleComponent } from './searcharticle/searcharticle.component';
//  import {DataViewModule} from 'primeng/dataview';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    MenuComponent,
    DisplayComponent,
    SearcharticleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    NgbModule

    //  DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
