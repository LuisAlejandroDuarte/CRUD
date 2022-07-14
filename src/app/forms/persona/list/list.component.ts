import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
declare const $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,AfterViewInit {
  tabla:any;
  constructor(private router:Router,private servicePersona:PersonaService) { }

  ngOnInit(): void {
    setTimeout(()=>{

    });
  }

  ngAfterViewInit(): void {


    setTimeout(()=>{
      console.log("Entre ngAfter");
      this.tabla= $('#datatables').DataTable({
        pagingType: "full_numbers",
        lengthMenu: [
          [10, 25, 50, -1],
          [10, 25, 50, "Todos"]
        ],
        data:[],
        dom: '<"top"f>rt<"bottom"lp><"clear">',
        columns:[{title:'Id',data:'id'},
                 {title:'Nombre',data:'nombre'},
                 {title:'Apellido',data:'apellido'}
                ],
        paging: true,
        language: {
        search: "_INPUT_",
        searchPlaceholder: "Buscar",
        lengthMenu: "Mostar _MENU_ registros por página",
        zeroRecords: "No hay datos",
        info: "Mostrando _PAGE_ de _PAGES_",
        infoEmpty: "Mostrando 0 a 0 de 0 registros",
        infoFiltered: "(filtered from _MAX_ total registros)",
        paginate: {
          first:      "Primero",
          last:       "Último",
          next:       "Próximo",
          previous:   "Anterior"
        },
      },

        });

        const datos =this.servicePersona.getAll();
        console.log("Datos",datos);
        $('#datatables').DataTable().clear();
        $('#datatables').DataTable().rows.add(datos);

        $('#datatables').DataTable().draw();

      });

    }

    onCrearPersona() {
      this.router.navigateByUrl('crear-persona');
    }
}
