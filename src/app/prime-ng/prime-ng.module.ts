import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
