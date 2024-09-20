import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas-popup',
  templateUrl: './offcanvas-popup.component.html',
  styleUrls: ['./offcanvas-popup.component.css']
})
export class OffcanvasPopupComponent {
  showOffcanvas = false;    // Controls the visibility of the offcanvas popup
  showToggleButton = false; // Controls the visibility of the toggle button
  progress = 0;             // Tracks the progress of the migration
  intervalId: any;          // To hold the reference to the interval for progress bar
  hasStarted = false;       // Controls the visibility of the Start button

  // Function to start the migration process
  startMigration() {
    this.hasStarted = true;        // Hide the Start button
    this.showOffcanvas = true;     // Show the offcanvas popup
    this.showToggleButton = true;  // Show the toggle button during migration
    this.progress = 0;             // Initialize progress to 0

    // Simulate the progress bar updating every second
    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 10;       // Increment progress by 10%
      } else {
        clearInterval(this.intervalId); // Stop the interval when progress is 100%
        this.showOffcanvas = false;     // Hide the offcanvas when migration is done
        this.showToggleButton = false;  // Hide the toggle button after completion
        this.hasStarted = false;        // Show the Start button again after migration is completed
        alert('Migration process completed'); // Show the completion alert
      }
    }, 1000); // Updates every 1 second
  }

  // Function to toggle the visibility of the offcanvas popup
  toggleOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas;
  }
}
