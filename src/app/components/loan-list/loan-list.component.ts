// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-loan-list',
//   templateUrl: './loan-list.component.html',
//   styleUrls: ['./loan-list.component.css']
// })
// export class LoanListComponent {

// }


import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loan-list.component.html', // Adjust path if needed
  styleUrls: ['./loan-list.component.css'] // Adjust path if needed
})
export class LoanListComponent implements OnInit {
  loans$ = this.loanService.getLoans(); // Observable that holds the list of loans

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    // Any additional initialization logic can go here if needed
  }
}
