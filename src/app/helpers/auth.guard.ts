import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let token = localStorage.getItem('token')
        let expTime = new Date(localStorage.getItem('expTime'));
        let currentDte = new Date();
        if (token != undefined && expTime >= currentDte) {
            console.log('you have been logged')
            return true 
        }
        
            console.log('you have to login')
            this.router.navigate(['/authentification/login']);

    }
}

