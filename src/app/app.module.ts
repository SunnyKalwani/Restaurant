import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MenuitemsComponent } from './components/menuitems/menuitems.component';
import {HttpClientModule} from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerCommentComponent } from './components/customer-comment/customer-comment.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AdminLoginformComponent } from './components/admin-loginform/admin-loginform.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Category1Component } from './components/menu-items/components/category1/category1.component';
import { Category2Component } from './components/menu-items/components/category2/category2.component';
import { Category3Component } from './components/menu-items/components/category3/category3.component';
import { Category4Component } from './components/menu-items/components/category4/category4.component';
import { AllCategoriesComponent } from './components/menu-items/components/all-categories/all-categories.component';
import { AboutUsLeftComponent } from './components/about-us-left/about-us-left.component';
import { AboutTimingComponent } from './components/about-timing/about-timing.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { AddDeleteEditComponent } from './components/add-delete-edit/add-delete-edit.component';
import { ViewFeedbacksComponent } from './components/view-feedbacks/view-feedbacks.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminMenusComponent } from './components/admin-menus/admin-menus.component';
import { AdminFeedbackComponent } from './components/admin-feedback/admin-feedback.component';
import { AdminFeedbacksComponent } from './components/admin-feedbacks/admin-feedbacks.component';
import { AdminorderComponent } from './components/adminorder/adminorder.component';
import { AdminordersComponent } from './components/adminorders/adminorders.component';
import { AdminRegisterFormComponent } from './components/admin-register-form/admin-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutusComponent,
    MenuitemsComponent,
    OrdersComponent,
    CustomerCommentComponent,
    FeedbackComponent,
    AdminLoginformComponent,
    AddItemComponent,
    NavbarComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    AllCategoriesComponent,
    AboutUsLeftComponent,
    AboutTimingComponent,
    CommentComponent,
    CommentsComponent,
    CheckoutComponent,
    AdminpageComponent,
    AddDeleteEditComponent,
    ViewFeedbacksComponent,
    ViewOrdersComponent,
    AdminMenuComponent,
    AdminMenusComponent,
    AdminFeedbackComponent,
    AdminFeedbacksComponent,
    AdminorderComponent,
    AdminordersComponent,
    AdminRegisterFormComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
