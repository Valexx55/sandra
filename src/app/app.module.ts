// módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// componentes
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { IMCComponent } from './IMC/imc.component';
import { ImcPipe } from './IMC/imc.pipe';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';


@NgModule({
  declarations: [ //Componentes, Directivas, Pipes
    AppComponent,
    PersonaComponent,
    IMCComponent,
    ImcPipe,
    ListaPersonasComponent
  ],
  imports: [//Módulos
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],//Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
