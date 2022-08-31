import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guard';

  constructor ( public router:Router){
  }
  gotocontact()
  {
    this.router.navigate(['contact'])
  }
  gotohelp()
  {
    this.router.navigate(['helppage'])
  }
  gotohome()
  {
    this.router.navigateByUrl('/home')
  }
  gotologin()
  {
    this.router.navigateByUrl('/login')
  }
  gotoproduct()
  {
    this.router.navigateByUrl('/product')
  }
  ngOnInit(): void {
    
  }
}
