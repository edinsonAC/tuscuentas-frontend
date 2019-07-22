import { Component, OnInit } from '@angular/core';
import { Usuario } from '../componentes/usuario/usuario';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credencialesIncorrectas: boolean = false;
  usuario: Usuario;
  constructor(
    private loader: LoaderService,
    private authService: AuthService,
    private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.loader.startLoading();
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/listUsuario']);
    }
    this.loader.stopLoading();
  }



  login(): void {
    console.log(this.usuario);
    this.loader.startLoading();
    if (this.usuario.usuaCorreo == null || this.usuario.password == null) {
      
      return;
    }

    this.authService.login(this.usuario).subscribe(
      response => {
        console.log(response);
        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);

        let usuario = this.authService.usuario;
        this.loader.stopLoading();
        this.router.navigate(['/menu'])
      },
      error => {
        if (error.status == 400) {
          this.credencialesIncorrectas = true;
          this.loader.stopLoading();
        }
      }
    )
  }

}
