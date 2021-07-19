import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { PersonaService } from './services/persona/persona.service';
import { Persona } from './models/Persona';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CabeceraComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
