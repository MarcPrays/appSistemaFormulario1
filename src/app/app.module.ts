import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { TemplateComponent } from './plantillas/template/template.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    NavbarComponent,
    FooterComponent,
    CapitalizadoPipe,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
