import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterActivationService } from './service/router-activation.service';
import { RouterGuardServiceService } from './service/router-guard-service.service';
import { LogoutComponent } from './logout/logout.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[RouterActivationService]},
  {path:"logout",component:LogoutComponent,canActivate:[RouterActivationService]},
  {path:"tables",component:TableComponent,canActivate:[RouterActivationService]},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
