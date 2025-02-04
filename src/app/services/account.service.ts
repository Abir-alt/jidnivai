import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  createAccount(newAccount: any) {
    return this.http.get(`${this.apiUrl}/${1}`);
    throw new Error('Method not implemented.');
  }
  getAccounts() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = "http://localhost:8086/api/accounts"; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get account details by ID
  getAccountById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Deposit method
  deposit(accountId: number) {
    // Assuming the backend API supports a deposit endpoint.
    return this.http.post<any>(`${this.apiUrl}/${accountId}/deposit`, {});
  }

  // Withdraw method
  withdraw(accountId: number) {
    // Assuming the backend API supports a withdraw endpoint.
    return this.http.post<any>(`${this.apiUrl}/${accountId}/withdraw`, {});
  }
}
