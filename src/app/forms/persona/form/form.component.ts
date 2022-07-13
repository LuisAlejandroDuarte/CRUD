import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() persona?:Persona;
  @Input() title?:string;
  @Output() saveChanges = new EventEmitter<Persona>();
  formGroup!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      id:[0],
      nombre:[''],
      apellido:['']
    });

    if (this.persona) {
        this.formGroup.get('nombre')?.setValue(this.persona.nombre);
        this.formGroup.get('apellido')?.setValue(this.persona.apellido);
      }


  }

  onSubmit() {
    this.saveChanges.emit(this.persona);
    console.log('Guardar')
  }

  onSalir() {
    this.router.navigateByUrl('persona');
  }

}
