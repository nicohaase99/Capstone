import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  form: FormGroup;
fullName: string = 'John Doe';
email: string = 'email@email.com';
phone: string = '1234567890';
password: string = 'password';
confirmPassword: string = 'password';
address: string = '123 Main St';
city: string = 'Los Angeles';
state: string = 'California';
zip: string = '12345';
  // Define the form group and its controls


  constructor(private router: Router, private sharedDataService: SharedDataService) {
    // Initialize the form with controls and validators
    this.form = new FormGroup(
      {
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        address: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')])
      },
      { validators: this.passwordMatchValidator } // Attach the custom validator
    );
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

// Method to navigate to the SchedulingComponent with form data
navigateToScheduling(): void {
  if (this.form.valid) {
    this.router.navigate(['/scheduling'], { state: { data: this.form.value } });
  } else {
    console.log('Form is invalid. Please correct the errors.');
  }
}

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      this.sharedDataService.setClientData(this.form.value); // Store client data
      this.router.navigate(['/scheduling']); // Navigate to SchedulingComponent
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }
}