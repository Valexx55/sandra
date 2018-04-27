//todos los servicios, son Injectables
import {Injectable} from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PersonaService {

    static readonly URL_GET: string = "http://192.168.3.10:9080/angular/GetPersona";
    static readonly URL_GET_LIST: string = "http://192.168.3.10:9080/angular/GetListaPersonas"
    constructor (private http:HttpClient)
    {

    }

    getPersonaInicialAsync():Observable<Persona>
    {
        let persona:Persona;

            persona = new Persona("Juan", 1.5, 60);
        
        return of(persona);
    }


    getPersonaInicialHttpReal():Observable<Persona>
    {
        let persona:Observable<Persona>;

            persona = this.http.get<Persona>(PersonaService.URL_GET);
        
        return persona;
    }

    getPersonaInicialHttpRealAs():Observable<Persona>
    {
        let persona:Observable<Persona>;
        let o_persona:Observable<Object>;

            o_persona = this.http.get(PersonaService.URL_GET);
            persona = o_persona as Observable<Persona>;
        
        return persona;
    }

    getPersonaInicial () : Persona
    {
        let persona:Persona;

            persona = new Persona("Juan", 1.5, 60);

        return persona;
    }

    getListaPersonas():Observable<Persona[]>
    {
        let listapersonas:Observable<Persona[]>

            listapersonas = this.http.get<Persona[]>(PersonaService.URL_GET_LIST);

        return listapersonas;
    }

}