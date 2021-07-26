import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
