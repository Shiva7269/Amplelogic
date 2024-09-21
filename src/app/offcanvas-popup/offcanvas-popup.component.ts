import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-offcanvas-popup',
  templateUrl: './offcanvas-popup.component.html',
  styleUrls: ['./offcanvas-popup.component.css']
})
export class OffcanvasPopupComponent {
  showOffcanvas = false;    
  showToggleButton = false; 
  progress = 0;            
  intervalId: any;          
  hasStarted = false;       
  constructor(private toastr: ToastrService) {}
  startMigration() {
    this.hasStarted = true;        
    this.showOffcanvas = true;    
    this.showToggleButton = true;  
    this.progress = 0;          

    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 10;       
      } else {
        clearInterval(this.intervalId); 
        this.showOffcanvas = false;     
        this.showToggleButton = false;  
        this.hasStarted = false;  
      
        this.toastr.success('Migration process completed','Success');

      }
    }, 1000); 
  }

  toggleOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas;
  }
}
