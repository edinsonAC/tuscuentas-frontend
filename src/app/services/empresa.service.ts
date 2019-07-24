import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { ListadoEmpresaBasica } from '../componentes/empresa/ListadoEmpresaBasica';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl + '/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  listarEmpresaBasicaPorUsuario(id): Observable<ListadoEmpresaBasica[]> {
    return this.http.get(`${API_URL + '/listarEmpresasBasicaUsuario'}/${id}`).pipe(
      map(response => response as ListadoEmpresaBasica[])
    );
  }

  listarEmpresaBasicaPorContador(id): Observable<ListadoEmpresaBasica[]> {
    return this.http.get(`${API_URL + '/listarEmpresasBasicaContador'}/${id}`).pipe(
      map(response => response as ListadoEmpresaBasica[])
    );
  }
}
