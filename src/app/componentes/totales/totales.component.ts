import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { AuthService } from 'src/app/login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { Totales } from './totales';
import { TotalesService } from 'src/app/services/totales.service';
import { ListadoEmpresaBasica } from '../empresa/ListadoEmpresaBasica';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css']
})
export class TotalesComponent implements OnInit {
  usuario: Usuario;
  totales: Totales;
  empresaSeleccionada: number = 0;
  empresas: ListadoEmpresaBasica[] = [];
  tipoTarea: string;

  constructor(private authService: AuthService,
    public totalesService: TotalesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public usuarioService: UsuarioService,
    public empresaService: EmpresaService) { }

  ngOnInit() {
    this.usuario = this.authService.usuario;

    if (this.usuario.tipoUsuario.tiusId == '1') {
      this.cargarTotalesAdmin();
    } else if (this.usuario.tipoUsuario.tiusId == '3') {
      this.cargarTotalesTareasContador();
      this.cagarEmpresasContador();
    } else if (this.usuario.tipoUsuario.tiusId == '6') {
      this.cagarEmpresasUsuario();
    }
  }


  cargarTotalesAdmin() {
    this.totalesService.getTotalesAdmin().subscribe(
      response => {
        this.totales = response
      }
    )
  }

  cargarTotalesTareasContador() {
    this.totalesService.getTotalesTareas(this.usuario.usuaId, this.empresaSeleccionada).subscribe(
      response => {
        this.totales = response
      }
    )
  }

  cagarEmpresasUsuario() {
    this.empresaService.listarEmpresaBasicaPorUsuario(this.usuario.usuaId).subscribe(
      response => {
        this.empresas = response
      }
    )
  }


  cagarEmpresasContador() {
    this.empresaService.listarEmpresaBasicaPorContador(this.usuario.usuaId).subscribe(
      response => {
        this.empresas = response
        console.log("empresas contador -> ", this.empresas)
      }
    )
  }


  seleccionarEmpresa(empresa: number) {
    console.log("seleccionar empresa --> ", empresa)
    this.empresaSeleccionada = empresa
    this.cargarTotalesTareasContador();
  }


  seleccionarTipo(tipo: string) {
    console.log("es el tipo>>>>>>>>>>>>>>>>>>>>>>>>>><<", tipo)
    this.tipoTarea = tipo
  }
}
