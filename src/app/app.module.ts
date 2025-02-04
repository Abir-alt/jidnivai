import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountCreateComponent } from './components/account-create/account-create.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { InsuranceListComponent } from './components/insurance-list/insurance-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountListComponent,
    AccountDetailsComponent,
    AccountCreateComponent,
    AccountDetailsComponent,
    LoanListComponent,
    CardListComponent,
    InsuranceListComponent,
    NavbarComponent,
    ErrorPageComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
