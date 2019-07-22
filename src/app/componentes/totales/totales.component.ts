import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { AuthService } from 'src/app/login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { Totales } from './totales';
import { TotalesService } from 'src/app/services/totales.service';

@Component({
  selector: 'app-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css']
})
export class TotalesComponent implements OnInit {
  usuario: Usuario;
  totales: Totales;
  constructor(private authService: AuthService,
    private totalesService: TotalesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.authService.usuario;

    if (this.usuario.tipoUsuario.tiusId == '1') {
      this.totalesService.getTotalesAdmin().subscribe(
        response => {
          this.totales = response
        }
      )
    } else if (this.usuario.tipoUsuario.tiusId == '3') {
      this.totalesService.getTotalesTareas(this.usuario.usuaId, 0).subscribe(
        response => {
          this.totales = response
        }
      )
    }

  }

}
