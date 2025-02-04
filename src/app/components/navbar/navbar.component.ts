// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
// authService: any;

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // For redirecting after logout
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', // Adjust path as needed
  styleUrls: ['./navbar.component.css'] // Adjust path as needed
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Additional initialization can be done here if needed
  }

  // Method to handle user logout
  onLogout(): void {
    this.authService.logout(); // Call logout method in AuthService
    this.router.navigate(['/login']); // Redirect to login page
  }

}
