import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  firstName: string ='';
  lastName: string = ''
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    let fullname = this.firstName + ' ' +this.lastName;
    console.log('Full Name', fullname);
    console.log('Email', this.email);

    let payload = {
      fullname: this.firstName + ' ' +this.lastName,
      email: this.email
    }

    localStorage.setItem('token','1234');

  }

  clear() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}
