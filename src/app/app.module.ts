import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SmallPlatesComponent } from './components/menu-items/small-plates/small-plates.component';
import { SoupsandsaladsComponent } from './components/menu-items/soupsandsalads/soupsandsalads.component';
import { EssentialsComponent } from './components/menu-items/essentials/essentials.component';
import { MeatandfishComponent } from './components/menu-items/meatandfish/meatandfish.component';
import { DesertsComponent } from './components/menu-items/deserts/deserts.component';
import { NonalcoholicdrinksComponent } from './components/menu-items/nonalcoholicdrinks/nonalcoholicdrinks.component';
import { AlcoholicdrinksComponent } from './components/menu-items/alcoholicdrinks/alcoholicdrinks.component';
import { MenuitemsComponent } from './components/menuitems/menuitems.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutusComponent,
    SmallPlatesComponent,
    SoupsandsaladsComponent,
    EssentialsComponent,
    MeatandfishComponent,
    DesertsComponent,
    NonalcoholicdrinksComponent,
    AlcoholicdrinksComponent,
    MenuitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }