// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account-details',
//   templateUrl: './account-details.component.html',
//   styleUrls: ['./account-details.component.css']
// })
// export class AccountDetailsComponent {
// account$: Observable<unknown>|Subscribable<unknown>|Promise<unknown>;
// withdraw(arg0: any) {
// throw new Error('Method not implemented.');
// }
// deposit(arg0: any) {
// throw new Error('Method not implemented.');
// }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html', // Adjust the path
  styleUrls: ['./account-details.component.css'] // Adjust the path
})
export class AccountDetailsComponent implements OnInit {
  account$ = this.accountService.getAccountById(this.route.snapshot.params['id']);
  
  constructor(
    private accountService: AccountService, // Injecting AccountService
    private route: ActivatedRoute // To get route parameters
  ) {}

  ngOnInit(): void {
    // Optionally, fetch the account using the account ID from the route params
    const accountId = this.route.snapshot.params['id'];
    this.account$ = this.accountService.getAccountById(accountId);
  }

  // Deposit method
  deposit(accountId: number): void {
    // Call a method in AccountService to handle the deposit logic (you'll need to implement deposit in the service)
    this.accountService.deposit(accountId).subscribe(
      (response) => {
        console.log('Deposit successful', response);
        // Optionally, refresh the account data or show a success message
      },
      (error) => {
        console.error('Error during deposit', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  // Withdraw method
  withdraw(accountId: number): void {
    // Call a method in AccountService to handle the withdrawal logic (you'll need to implement withdrawal in the service)
    this.accountService.withdraw(accountId).subscribe(
      (response) => {
        console.log('Withdrawal successful', response);
        // Optionally, refresh the account data or show a success message
      },
      (error) => {
        console.error('Error during withdrawal', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}
