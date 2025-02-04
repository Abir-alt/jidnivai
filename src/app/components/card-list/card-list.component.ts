// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card-list',
//   templateUrl: './card-list.component.html',
//   styleUrls: ['./card-list.component.css']
// })
// export class CardListComponent {

// }


import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-cards',
  templateUrl: './card-list.component.html', // Adjust path if needed
  styleUrls: ['./card-list.component.css'] // Adjust path if needed
})
export class CardListComponent implements OnInit {
  cards$ = this.cardService.getCards(); // Observable that holds the list of cards

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    // Any additional initialization logic can go here if needed
  }
}
