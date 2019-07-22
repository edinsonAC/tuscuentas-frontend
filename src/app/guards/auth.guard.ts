import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {

  }
  //esta vigilando antes de ir a las rutas para validar si esta autenticado
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {

      if (this.isTokenExpirado()) {
        this.authService.logout();
        this.route.navigate(['/login']);
        return false;
      }

      return true;
    }
    this.route.navigate(['/login'])
    return false;
  }

  isTokenExpirado(): boolean {
    let token = this.authService.token;

    let payload = this.authService.obtenerDatosToken(token);
    let now = new Date().getTime() / 1000;

    if (payload.exp < now) {
      return true;
    }
    return false;
  }

}
