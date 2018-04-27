import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonaService} from '../persona/persona.service';

@Component({
    selector: 'lista-personas',
    templateUrl: './lista-personas.component.html',
    providers: [PersonaService]
})

export class ListaPersonasComponent implements OnInit {

    private listapersona : Persona[];

    constructor (private lista_persona_service: PersonaService){}

    ngOnInit () 
    {
       
        this.lista_persona_service.getListaPersonas().subscribe(
            p=> {this.listapersona = []; this.listapersona = p; }, //ÉXITO
            err=> console.error("Errorazo mío " + err), //ERROR
            () => console.log ("Comunicación terminada") // COMPLETADO
        );
    }

    public mostrarListaPersonas(personas: Persona[]): void{
        console.log("lista", this.lista_persona_service);
    }

}

