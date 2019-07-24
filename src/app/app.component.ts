import { Component, Input, ViewChild } from '@angular/core';
import { AuthService } from './login/auth.service';
import { ListTareaComponent } from './componentes/list-tarea/list-tarea.component';
import { TotalesComponent } from './componentes/totales/totales.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tus-cuentas |';

  constructor(private authService: AuthService) { }

  mostrarAlertas(): boolean {
    if (this.authService.isAuthenticated() && this.authService.usuario.tipoUsuario.tiusId != '1') {
      return true;
    }
    return false;
  }

}


