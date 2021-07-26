import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ]
})
export class ComponentsModule { }
