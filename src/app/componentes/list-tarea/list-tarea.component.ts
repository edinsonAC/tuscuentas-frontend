import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ListadoEjecuciones } from './listado-ejecuciones';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { TotalesComponent } from '../totales/totales.component';

@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.css']
})
export class ListTareaComponent implements OnInit {
  @Output() emitEvent: EventEmitter<number> = new EventEmitter<number>();
  ejecuciones: ListadoEjecuciones[];
  tituloListado: string;
  constructor(
    public totales: TotalesComponent,
    public usuarioService: UsuarioService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.cargarEjecuciones();

  }

  public cargarEjecuciones() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log("llega a cargar ejecuciones id ", id)
      let idEmpresa = params['idEmpresa']
      console.log("llega a cargar ejecuciones idEmpresa ", idEmpresa)
      let tipoTarea = params['tipoTarea']
      console.log("llega a cargar ejecuciones", tipoTarea)
      if (id) {
        switch (tipoTarea) {
          case '1':
            this.totales.seleccionarTipo("1");
            this.tituloListado = "Tareas atrasadas"
            this.listarEjecucionesAtrasadas(id, idEmpresa);
            break;
          case '2':
            this.totales.seleccionarTipo("2");
            this.tituloListado = "Tareas abiertas"
            this.listarEjecucionesAbiertas(id, idEmpresa);
            break;
          case '3':
            //   this.totales.seleccionarTipo("3");
            this.tituloListado = "Tareas observadas"
            this.listarEjecucionesObservadas(id, idEmpresa);
            break;
          case '4':
            this.totales.seleccionarTipo("4");
            //   this.tituloListado = "Tareas próximas"
            this.listarEjecucionesProximas(id, idEmpresa)
            break;
          case '5':
            //   this.totales.seleccionarTipo("5");
            this.tituloListado = "Tareas cerradas"
            this.listarEjecucionesCerradas(id, idEmpresa);
            break;
        }
      }
    })
  }


  listarEjecucionesAbiertas(id, idEmpresa) {
    this.usuarioService.listarEjecucionesAbiertas(id, idEmpresa).subscribe(
      (response) => {
        this.ejecuciones = response
        console.log("tareas<>>>>>> ", this.ejecuciones)
      }
    )
  }

  listarEjecucionesAtrasadas(id, idEmpresa) {
    this.usuarioService.listarEjecucionesAtrasadas(id, idEmpresa).subscribe(
      (response) => {
        this.ejecuciones = response
        console.log("tareas<>>>>>> ", this.ejecuciones)
      }
    )
  }

  listarEjecucionesObservadas(id, idEmpresa) {
    this.usuarioService.listarEjecucionesObservadas(id, idEmpresa).subscribe(
      (response) => {
        this.ejecuciones = response
        console.log("tareas<>>>>>> ", this.ejecuciones)
      }
    )
  }

  listarEjecucionesProximas(id, idEmpresa) {
    this.usuarioService.listarEjecucionesProximas(id, idEmpresa).subscribe(
      (response) => {
        this.ejecuciones = response
        console.log("tareas<>>>>>> ", this.ejecuciones)
      }
    )
  }

  listarEjecucionesCerradas(id, idEmpresa) {
    this.usuarioService.listarEjecucionesCerradas(id, idEmpresa).subscribe(
      (response) => {
        this.ejecuciones = response
        console.log("tareas<>>>>>> ", this.ejecuciones)
      }
    )
  }

}
