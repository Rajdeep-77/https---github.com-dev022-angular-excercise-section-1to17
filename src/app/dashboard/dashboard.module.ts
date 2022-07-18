import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    UserDashComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashboardModule {
  constructor(){
    console.log("dashboard module");
  }
 }
