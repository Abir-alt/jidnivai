// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class InsuranceService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';  // Adjust this import based on your project structure

// Define the interface for insurance data (adjust as needed)
export interface Insurance {
  id: number;
  insuranceType: string;
  policyNumber: string;
  premium: number;
  coverage: number;
}

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiUrl = "http://localhost:8086/api/insurances"; // Your API URL for insurances (replace `apiBaseUrl` with your actual base URL)

  constructor(private http: HttpClient) { }

  // Fetch all insurances
  getInsurances(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.apiUrl);
  }

  // Fetch a single insurance by its ID
  getInsuranceById(insuranceId: number): Observable<Insurance> {
    return this.http.get<Insurance>(`${this.apiUrl}/${insuranceId}`);
  }

  // Create a new insurance
  createInsurance(insurance: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(this.apiUrl, insurance);
  }

  // Update an existing insurance
  updateInsurance(insuranceId: number, insurance: Insurance): Observable<Insurance> {
    return this.http.put<Insurance>(`${this.apiUrl}/${insuranceId}`, insurance);
  }

  // Delete an insurance
  deleteInsurance(insuranceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${insuranceId}`);
  }
}
