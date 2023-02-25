import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Training';
  constructor(private router: Router) {
   
  }

  gotoDashboard() {
    console.log('in dashboard method');
    this.router.navigate(['/dashboard'])
  }

  gotoServices() {
    console.log('in services method');
    this.router.navigate(['/services'])
  }

  gotoHome() {
    console.log('in home module');
    this.router.navigate(['/home']);
  }
}
