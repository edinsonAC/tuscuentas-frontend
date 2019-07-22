import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../componentes/usuario/usuario';
import { TipoUsuario } from '../componentes/tipo-usuario/tipoUsuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuario;
  private _token: string;
  constructor(private http: HttpClient) { }

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }
  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }


  login(usuario: Usuario): Observable<any> {
    const urlEndPoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('tus-cuentas-frontend' + ':' + '12345')

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.usuaCorreo);
    params.set('password', usuario.password);

    console.log(params.toString());
    return this.http.post(urlEndPoint, params.toString(), { headers: httpHeaders });
  }


  guardarUsuario(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.usuaId = payload.id;
    this._usuario.usuaImgperfil = payload.img_perfil;
    this._usuario.tipoUsuario = new TipoUsuario();
    this._usuario.tipoUsuario.tiusId = payload.tipo_usuario;
    this._usuario.usuaPrimernombre = payload.primer_nombre;
    this._usuario.usuaPrimerapellido = payload.primer_apellido;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);

    //  if (payload != null && payload.user_name && payload.user_name.length > 0) {
    if (payload != null) {
      return true;
    }
    return false;
  }


  logout(): void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
  }

  hasRole(role: string): boolean {
    if (this.usuario.tipoUsuario.tiusId == '13') {
      return true;
    }
    return false;
  }
}

