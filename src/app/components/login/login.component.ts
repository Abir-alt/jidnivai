

// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginForm = this.fb.group({
//     username: ['', Validators.required],
//     password: ['', Validators.required]
//   });

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       this.authService.login(this.loginForm.value).subscribe({
//         next: () => this.router.navigate(['/accounts']),
//         error: err => console.error('Login failed:', err)
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // For redirecting after login
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Adjust path as needed
  styleUrls: ['./login.component.css'] // Adjust path as needed
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the login form with validation
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Username is required
      password: ['', Validators.required]  // Password is required
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    // Call the AuthService to log in
    this.authService.login({ username: username as string, password: password as string }).subscribe(
      (response) => {
        // Handle successful login (e.g., save token, redirect)
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']); // Redirect to the dashboard or another page
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}
