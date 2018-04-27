import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService} from './persona.service';
//import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  providers: [PersonaService]
})

export class PersonaComponent implements OnInit {

  private persona : Persona;
 // private persona_service:PersonaService;

 /* constructor()
  {
    this.persona = new Persona ("Rossi", 1.70, 56);
  }
*/
  constructor (private persona_service:PersonaService)
  {
    
    //this.persona = this.persona_service.getPersonaInicial();
    
  }


  ngOnInit () 
  {
    console.log('oninit');
   /* this.persona_service.getPersonaInicialAsync()
    .subscribe(p=> this.persona = p);*/
    
    this.persona_service.getPersonaInicialHttpReal().
    subscribe(
      p=> this.persona = p, //ÉXITO
      err=> console.error("Errorazo mío " + err), //ERROR
      () => console.log ("Comunicación terminada")); // COMPLETADO
  }

  public mostrarPersona(persona : Persona) : void
  {
    console.log("nombre = ", persona.nombre);
    console.log("altura = ", persona.altura);
    console.log("peso = ", persona.peso);
  }

  public esVisible (): boolean
  {
    return true;
  }
}

