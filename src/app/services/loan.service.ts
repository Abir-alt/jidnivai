// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoanService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';  // Adjust this import based on your project structure

// Define the interface for loan data (adjust as needed)
export interface Loan {
  id: number;
  loanType: string;
  amount: number;
  interestRate: number;
  duration: number;  // Duration in months
}

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = "http://localhost:8086//api/loans"; // Your API URL for loans (replace `apiBaseUrl` with your actual base URL)

  constructor(private http: HttpClient) { }

  // Fetch all loans
  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiUrl);
  }

  // Fetch a single loan by its ID
  getLoanById(loanId: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/${loanId}`);
  }

  // Create a new loan
  createLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.apiUrl, loan);
  }

  // Update an existing loan
  updateLoan(loanId: number, loan: Loan): Observable<Loan> {
    return this.http.put<Loan>(`${this.apiUrl}/${loanId}`, loan);
  }

  // Delete a loan
  deleteLoan(loanId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${loanId}`);
  }
}
