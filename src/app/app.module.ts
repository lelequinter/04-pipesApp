import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

//Componentes
import { AppComponent } from './app.component';

//Mis Modulos
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    CommonModule,
    RouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
