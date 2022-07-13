import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  saveChanges(persona:Persona) : void {
      console.log("Persona",persona);
  }

}
