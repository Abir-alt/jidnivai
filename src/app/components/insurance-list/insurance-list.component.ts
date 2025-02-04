// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-insurance-list',
//   templateUrl: './insurance-list.component.html',
//   styleUrls: ['./insurance-list.component.css']
// })
// export class InsuranceListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurance-list.component.html', // Adjust path if needed
  styleUrls: ['./insurance-list.component.css'] // Adjust path if needed
})
export class InsuranceListComponent implements OnInit {
  insurances$ = this.insuranceService.getInsurances(); // Observable that holds the list of insurances

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit(): void {
    // Any additional initialization logic can go here if needed
  }
}
