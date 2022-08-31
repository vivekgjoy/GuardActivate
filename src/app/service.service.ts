import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  isLogedIn(){
    return !!localStorage.getItem('login')
   }
}
