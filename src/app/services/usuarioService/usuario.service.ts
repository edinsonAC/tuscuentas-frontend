import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from 'src/app/componentes/usuario/usuario';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/componentes/menu/menu';
import { Alerta } from 'src/app/componentes/alertas/alertas';
import { AlertaBasica } from 'src/app/componentes/alertas/alertaBasica';
import { ListadoEjecuciones } from 'src/app/componentes/list-tarea/listado-ejecuciones';

const API_URL = environment.apiUrl + '/usuario';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + '/listarUsuarios');
  }

  getUsuario(id): Observable<Usuario> {
    return this.http.get(`${API_URL + '/buscarUsuario'}/${id}`).pipe(
      map(response => response as Usuario)
    );
  }

  subirFoto(archivo: File, id): Observable<Usuario> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);
    console.log("form data -->", formData)
    return this.http.post(`${API_URL + '/upload/'}`, formData).pipe(
      map((response: any) => response.usuario as Usuario),
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(e);
      }
      )
    );
  }

  listarMenusPorUsuario(id): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${API_URL + '/listarMenu'}/${id}`);
  }

  listarAlertasPorIdUsuario(id): Observable<AlertaBasica[]> {
    return this.http.get<AlertaBasica[]>(`${API_URL + '/listarAlertas'}/${id}`);
  }

  listarEjecucionesAbiertas(id, idEmpresa): Observable<ListadoEjecuciones[]> {
    return this.http.get<ListadoEjecuciones[]>(`${API_URL + '/listarAbiertas'}/${id}/${idEmpresa}`);
  }

  listarEjecucionesAtrasadas(id, idEmpresa): Observable<ListadoEjecuciones[]> {
    return this.http.get<ListadoEjecuciones[]>(`${API_URL + '/listarAtrasadas'}/${id}/${idEmpresa}`);
  }

  listarEjecucionesProximas(id, idEmpresa): Observable<ListadoEjecuciones[]> {
    return this.http.get<ListadoEjecuciones[]>(`${API_URL + '/listarProximas'}/${id}/${idEmpresa}`);
  }

  listarEjecucionesObservadas(id, idEmpresa): Observable<ListadoEjecuciones[]> {
    return this.http.get<ListadoEjecuciones[]>(`${API_URL + '/listarObservadas'}/${id}/${idEmpresa}`);
  }

  listarEjecucionesCerradas(id, idEmpresa): Observable<ListadoEjecuciones[]> {
    return this.http.get<ListadoEjecuciones[]>(`${API_URL + '/listarCerradas'}/${id}/${idEmpresa}`);
  }
}