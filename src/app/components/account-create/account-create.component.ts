// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account-create',
//   templateUrl: './account-create.component.html',
//   styleUrls: ['./account-create.component.css']
// })
// export class AccountCreateComponent {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
// accountForm: any;

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html', // Replace with actual path
  styleUrls: ['./account-create.component.css'] // Replace with actual path
})
export class AccountCreateComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService // Injecting account service to handle account creation
  ) {
    // Initialize the form group with validators
    this.accountForm = this.fb.group({
      accountHolderName: ['', [Validators.required]],
      balance: ['', [Validators.required, Validators.min(1)]],
      accountType: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.accountForm.valid) {
      const newAccount = this.accountForm.value;
      this.accountService.createAccount(newAccount).subscribe(
        (response) => {
          console.log('Account created successfully:', response);
          // Handle success, e.g., show a success message or navigate to a different page
        },
        (error) => {
          console.error('Error creating account:', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
}
