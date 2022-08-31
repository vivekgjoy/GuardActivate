import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }
  userForm:FormGroup
  ngOnInit(): void {
    this.userForm = new FormGroup({
      'email' : new FormControl ('Vivek@gmail.com'),
      'password' :  new FormControl ('Vivek@123')
})
  }
  setuservalue(){
    this.userForm.setValue({
      'email' : 'bala@gmail.com',
      'password' : 'bala@123'
    })
  }
  reset(){
    this.userForm.reset()
  }
  default(){
    this.ngOnInit()
  }
  gotohome()
  {
    this.router.navigateByUrl('/home')
  }
  onsubmit()
  {
    console.log(this.userForm.value)
    if (this.userForm.value.email === 'Vivek@gmail.com' && 
    this.userForm.value.password === 'Vivek@123')
    {
      alert('login Success!')
      localStorage.setItem('login','logedin')

      this.router.navigateByUrl('/home')
    }
    else 
    {
      alert('login failed!')
    }
  }
}
