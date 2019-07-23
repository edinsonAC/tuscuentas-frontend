import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from 'src/app/login/auth.service';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { Alerta } from './alertas';
import { AlertaBasica } from './alertaBasica';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  alertas: AlertaBasica[] = [];
  usuario: Usuario;
  constructor(
    private loader: LoaderService,
    private authService: AuthService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuario = this.authService.usuario;

    this.usuarioService.listarAlertasPorIdUsuario(this.usuario.usuaId).subscribe(
      response => {
        this.alertas = response
        console.log("alertas -->> ", this.alertas)
      }
    )
  }

}
