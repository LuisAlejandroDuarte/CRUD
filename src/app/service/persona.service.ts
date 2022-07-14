import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryPersona } from 'src/repository/persona.repository';
import { Persona } from '../model/persona.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class PersonaService {

  constructor(private http:HttpClient,private router:Router) { }

  getAll(){
    //return this.http.get(`${base_url}/GetAllDateRuta/${environment.base_url}`);

    return RepositoryPersona;
  }

  crear(persona:Persona){

   // return this.http.post(`${base_url}/CrearRuta`,ruta);
  }

  editar(persona:Persona){

    //return this.http.put(`${base_url}/EditarRuta`,ruta);
  }

}
