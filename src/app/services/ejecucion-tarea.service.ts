import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { environment } from 'src/environments/environment';
import { EjecucionTarea } from '../componentes/ejecucion-tarea/ejecucion-tarea';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const API_URL = environment.apiUrl + '/ejecucionTarea';
@Injectable({
  providedIn: 'root'
})
export class EjecucionTareaService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  verEjecucion(id): Observable<EjecucionTarea> {
    return this.http.get(`${API_URL + '/verEjecucion'}/${id}`).pipe(
      map(response => response as EjecucionTarea)
    );
  }
}
