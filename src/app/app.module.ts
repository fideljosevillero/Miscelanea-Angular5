import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { routing, appRoutingProviders } from './app.routing';

//*** Permite utilizar el '[(ngModel)]' sin problemas (Fixed)
import { FormsModule }   from '@angular/forms';

import { HttpModule }   from '@angular/http';


import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Page404Component } from './page404/page404.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AutoComponent } from './auto/auto.component';
import { ContactoClienteComponent } from './contacto-cliente/contacto-cliente.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    Page404Component,
    AlmacenComponent,
    AutoComponent,
    ContactoClienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
