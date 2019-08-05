import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { AuthService } from 'src/app/login/auth.service';
import { Usuario } from './usuario';
import { TipoUsuario } from '../tipo-usuario/tipoUsuario';
import { TipoDocumento } from './tipo-documento';
import { Departamento } from '../util/departamento';
import { Municipio } from '../util/municipio';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  departamentos1: SelectItem[];
  departamentoSeleccionado:any;
  usuario: Usuario;
  tipoUsuario: TipoUsuario[];
  tipoDocumento: TipoDocumento[];
  departamentos: Departamento[];
  departamento: string;
  municipios: Municipio[];

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService) { }

  ngOnInit() {
    this.listarDepartamentos()
    this.listarTipoDocumento()
    this.listarTipoTipoUsuario()
  }


  listarTipoDocumento() {
    this.usuarioService.listarTipoDocumento().subscribe(
      (respuesta) => this.tipoDocumento = respuesta
    );
  }

  listarTipoTipoUsuario() {
    this.usuarioService.listarTipoUsuario().subscribe(
      (respuesta) => this.tipoUsuario = respuesta
    );
  }

  listarDepartamentos() {
    this.usuarioService.listarDepartamentos().subscribe(
      response => this.departamentos = response
    )
  }

  listarMunicipiosPorDepartamento() {
    this.usuarioService.listarMunicipiosPorDepartamento(this.departamento).subscribe(
      response => this.municipios = response
    )
  }

}
