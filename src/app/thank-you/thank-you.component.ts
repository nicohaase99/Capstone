import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  clientData: any;
  schedulingData: any;

  constructor(private sharedDataService: SharedDataService) {
    this.clientData = this.sharedDataService.getClientData(); // Retrieve client data
    this.schedulingData = this.sharedDataService.getSchedulingData(); // Retrieve scheduling data
    console.log('Scheduling Data:', this.schedulingData); // Debugging
  }
}
