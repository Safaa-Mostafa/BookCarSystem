import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavComponent } from '../app/home/sidenav/sidenav.component';
import { HeaderComponent } from '../app/home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './cars/all/all.component';
import { ListComponent } from './users/list/list.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    AllComponent,
     ListComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  HttpClientModule,
  ReactiveFormsModule,
ToastrModule,
JwtModule.forRoot({
  config:{
    tokenGetter:()=>{
      return localStorage.getItem('access_token');
    },
    allowedDomains:['localhost:4200'],
  }
})


  ],
  providers: [   {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorInterceptor,
    multi:true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
