import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EjecucionTarea } from './ejecucion-tarea';
import { ActivatedRoute } from '@angular/router';
import { EjecucionTareaService } from 'src/app/services/ejecucion-tarea.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-ejecucion-tarea',
  templateUrl: './ejecucion-tarea.component.html',
  styleUrls: ['./ejecucion-tarea.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EjecucionTareaComponent implements OnInit {

  ejecucion: EjecucionTarea;
  urlImg: string = API_URL + "/usuario/upload/img/";

  constructor(private activatedRoute: ActivatedRoute,
    public ejecucionService: EjecucionTareaService) { }

  ngOnInit() {
    this.cargarEjecucion()
  }


  public cargarEjecucion() {
    console.log("llega a cargar ejecucion")
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log("llega a cargar ejecucion con el id ", id)
      if (id) {
        this.ejecucionService.verEjecucion(id).subscribe(
          (response) => {
            this.ejecucion = response
            console.log("el ejecucion<>>>>>> ", this.ejecucion)
          }
        )
      }
    })
  }
}
