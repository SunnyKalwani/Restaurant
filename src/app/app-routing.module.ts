import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AlcoholicdrinksComponent } from './components/menu-items/alcoholicdrinks/alcoholicdrinks.component';
import { DesertsComponent } from './components/menu-items/deserts/deserts.component';
import { EssentialsComponent } from './components/menu-items/essentials/essentials.component';
import { MeatandfishComponent } from './components/menu-items/meatandfish/meatandfish.component';
import { NonalcoholicdrinksComponent } from './components/menu-items/nonalcoholicdrinks/nonalcoholicdrinks.component';
import { SmallPlatesComponent } from './components/menu-items/small-plates/small-plates.component';
import { SoupsandsaladsComponent } from './components/menu-items/soupsandsalads/soupsandsalads.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'alcoholicdrinks', component: AlcoholicdrinksComponent},
  {path: 'deserts', component: DesertsComponent},
  {path: 'essentials', component: EssentialsComponent},
  {path: 'meatandfish', component: MeatandfishComponent},
  {path: 'nonalcoholicdrinks', component: NonalcoholicdrinksComponent},
  {path: 'smallplates', component: SmallPlatesComponent},
  {path: 'soupsandsalads', component: SoupsandsaladsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
