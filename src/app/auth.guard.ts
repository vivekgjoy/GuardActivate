import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:ServiceService, private router:Router){

  }
  canActivate(){
    if(!!localStorage.getItem('login')){
      return true;
    }
    alert('Please Login')
   this.router.navigate([''])
     return false
    }
}
