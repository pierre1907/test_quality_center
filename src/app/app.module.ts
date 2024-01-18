import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesApercuComponent } from './pages/pages-apercu/pages-apercu.component';
import { PagesVentesComponent } from './pages/pages-ventes/pages-ventes.component';
import { PagesAnalyseComponent } from './pages/pages-analyse/pages-analyse.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { PagePrincipaleComponentComponent } from './components/page-principale-component/page-principale-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PagesApercuComponent,
    PagesVentesComponent,
    PagesAnalyseComponent,
    MenuComponentComponent,
    PagePrincipaleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
