import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from './authentication/log-in-page/log-in-page.component';
import { UserDashComponent } from './dashboard/user-dash/user-dash.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { AddUserComponent } from './form-page/add-user/add-user.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LogInPageComponent},
  {path:'dashboard', component:UserDashComponent},
  {path:'userlist', component:UserListComponent},
  {path:'adduser', component:AddUserComponent},
  {path:'edituser', component:AddUserComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
