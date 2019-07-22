import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {

  }
  //esta vigilando antes de ir a las rutas para validar si esta autenticado
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (!this.authService.isAuthenticated()) {
      this.route.navigate(['/login'])
      return false;
    }

    let role = next.data['role'] as string;
    if (this.authService.hasRole(role)) {
      return true;
    }
    this.route.navigate(['/listUsuario'])
    return false;
  }
}
