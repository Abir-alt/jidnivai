// import { Component } from '@angular/core';
// import { Observable, Subscribable } from 'rxjs';

// @Component({
//   selector: 'app-account-list',
//   templateUrl: './account-list.component.html',
//   styleUrls: ['./account-list.component.css']
// })
// export class AccountListComponent {
// accounts$: Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;

// }

import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './account-list.component.html', // Adjust path if needed
  styleUrls: ['./account-list.component.css'] // Adjust path if needed
})
export class AccountListComponent implements OnInit {
  accounts$ = this.accountService.getAccounts(); // Fetch all accounts from the service

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // Optionally, you can perform additional initialization logic here.
  }
}
