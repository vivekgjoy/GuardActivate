import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HelppageComponent } from './helppage/helppage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'contact', component: ContactComponent, canActivate:[AuthGuard] },
  {path: 'helppage', component: HelppageComponent, canActivate:[AuthGuard] },
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  
  {path: 'login', component: LoginComponent, canActivate:[AuthGuard]},
  {path: 'product', component: ProductComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
