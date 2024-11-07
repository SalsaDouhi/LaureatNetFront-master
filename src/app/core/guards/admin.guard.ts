// admin.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUserRoles = this.authService.getCurrentUserRoles();
    if (currentUserRoles && currentUserRoles.includes('ROLE_ADMIN')) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}