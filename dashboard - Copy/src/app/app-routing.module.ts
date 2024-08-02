import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './cars/all/all.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomePageComponent } from './pages/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
const routes: Routes = [
  {
    path: 'cars/all',
    component: AllComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'user/home',
    component:HomePageComponent
,    canActivate:[AuthenticationGuard]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
