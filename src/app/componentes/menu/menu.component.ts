import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { AuthService } from 'src/app/login/auth.service';
import { Usuario } from '../usuario/usuario';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario: Usuario;
  menus: Menu[];
  constructor(
    private loader:LoaderService,
    private authService: AuthService,
     private usuarioService: UsuarioService
     ) { }

  ngOnInit() {
    this.loader.startLoading();
    this.usuario = this.authService.usuario;
    this.usuarioService.listarMenusPorUsuario(this.usuario.usuaId).subscribe(
      response => {
        this.menus = response
        this.loader.stopLoading()
      }
    )

  }

}
