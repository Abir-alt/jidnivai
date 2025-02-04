

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { InsuranceListComponent } from './components/insurance-list/insurance-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accounts', component: AccountListComponent, canActivate: [AuthGuard] },
  { path: 'accounts/create', component: AccountCreateComponent, canActivate: [AuthGuard] },
  { path: 'accounts/:id', component: AccountDetailsComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'loans', component: LoanListComponent },
      { path: 'cards', component: CardListComponent },
      { path: 'insurances', component: InsuranceListComponent }
    ]
  },
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

