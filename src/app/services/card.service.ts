// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CardService {
//   getCards() {
//     throw new Error('Method not implemented.');
//   }

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';  // Adjust this import based on your project structure

// Define the interface for card data (adjust as needed)
export interface Card {
  id: number;
  cardNumber: string;
  cardType: string;
  expiryDate: string;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = "http://localhost:8086/api/cards"; // Your API URL for cards (replace `apiBaseUrl` with your actual base URL)

  constructor(private http: HttpClient) { }

  // Fetch all cards
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  // Fetch a single card by its ID
  getCardById(cardId: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${cardId}`);
  }

  // Create a new card
  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }

  // Update an existing card
  updateCard(cardId: number, card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.apiUrl}/${cardId}`, card);
  }

  // Delete a card
  deleteCard(cardId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cardId}`);
  }
}


// addData(student: any) {
//   return this.httpClient.post(this.apiURL + ("/post"), student);
// }

// getAll() {
//   return this.httpClient.get(this.apiURL);
// }

// removeUser(id: any) {
//   return this.httpClient.delete(this.apiURL + "/delete/" + id)
// }



// getById(id:any){
//   return this.httpClient.get(this.apiURL + "/" + id);
// }

// updateData(student:Student){
//   return this.httpClient.put(this.apiURL+ "/update/" + student.id, student)
//   }