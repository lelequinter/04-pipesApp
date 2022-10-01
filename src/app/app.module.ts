import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

//Componentes
import { AppComponent } from './app.component';

//Mis Modulos
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la App
import localeEsCO from "@angular/common/locales/es-CO";
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsCO);

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
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
