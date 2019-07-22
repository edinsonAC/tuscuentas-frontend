import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { Totales } from '../componentes/totales/totales';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class TotalesService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  getTotalesAdmin(): Observable<Totales> {
    return this.http.get(`${API_URL + '/admin/totales'}`).pipe(
      map(response => response as Totales)
    );
  }

  getTotalesTareas(id, idEmpresa): Observable<Totales> {
    return this.http.get(`${API_URL + '/contador/totales'}/${id}/${idEmpresa}`).pipe(
      map(response => response as Totales)
    );
  }
}
