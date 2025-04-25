import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-scheduling',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent {
  receivedData: any; // Property to hold received data
  clientData: any; // Property to hold client data
  schedulingData: any; // Property to hold scheduling data
  // Define the form group and its controls
  schedulingForm: FormGroup;
  // Define the form controls
  numberOfPeople!: FormControl;
  appointmentDate!: FormControl;
  appointmentTime!: FormControl;
  notes!: FormControl;



  constructor(private router: Router, private sharedDataService: SharedDataService) {
    // Initialize the form
    this.schedulingForm = new FormGroup({
      numberOfPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      appointmentDate: new FormControl('', Validators.required),
      notes: new FormControl('')
    });

    // Optionally, initialize the property with data from the service
    this.receivedData = this.sharedDataService.getClientData();
  }

  // Define the onSubmit method
  onSubmit(): void {
    if (this.schedulingForm.valid) {
      console.log('Scheduling Form Data:', this.schedulingForm.value); // Debugging
      this.sharedDataService.setSchedulingData(this.schedulingForm.value); // Store scheduling data
      this.router.navigate(['/thank-you']); // Navigate to ThankYouComponent
    } else {
      console.log('Form is invalid. Please correct the errors.');
      console.log('Form Valid:', this.schedulingForm.valid);
      console.log('Form Values:', this.schedulingForm.value);
    }
  }
}
