import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tus-cuentas-frontend';


  constructor(private authService: AuthService) { }

  mostrarAlertas(): boolean {
    if (this.authService.isAuthenticated() && this.authService.usuario.tipoUsuario.tiusId != '1') {
      return true;
    }
    return false;
  }

}


