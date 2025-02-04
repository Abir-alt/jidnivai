// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
// registerForm: any;

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // For redirecting after successful registration
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', // Adjust path as needed
  styleUrls: ['./register.component.css'] // Adjust path as needed
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    // Initialize the form with form controls and validation
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  // Submit method for form
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return; // Don't submit if form is invalid
    }

    // Get form values
    const { username, email, password } = this.registerForm.value;

    // Call AuthService to handle user registration
    this.authService.register({username, email, password}).subscribe(
      response => {
        // On success, redirect to login or another page
        console.log('Registration successful:', response);
        this.router.navigate(['/login']); // Adjust redirect as needed
      },
      error => {
        console.error('Registration failed:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }
}
