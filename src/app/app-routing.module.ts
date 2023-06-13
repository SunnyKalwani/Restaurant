import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MenuitemsComponent } from './components/menuitems/menuitems.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminLoginformComponent } from './components/admin-loginform/admin-loginform.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { AuthguardService } from './services/authguard.service';
import { AdminRegisterFormComponent } from './components/admin-register-form/admin-register-form.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuitemsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'checkout/:item_id', component: CheckoutComponent},
  {path: 'login', component: AdminLoginformComponent},
  {path: 'adminpage', component: AdminpageComponent, canActivate: [AuthguardService]},
  {path: 'register', component: AdminRegisterFormComponent},
  {path: 'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
