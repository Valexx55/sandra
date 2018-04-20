import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html'
})

export class PersonaComponent implements OnInit {

  private persona : Persona;

  constructor()
  {
    this.persona = new Persona ("Rossi", 1.70, 56);
  }

  ngOnInit () 
  {
    console.log('oninit');
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

