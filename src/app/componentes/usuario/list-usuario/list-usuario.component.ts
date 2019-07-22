import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private authService: AuthService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => this.usuarios = usuarios
    );
  }
}
