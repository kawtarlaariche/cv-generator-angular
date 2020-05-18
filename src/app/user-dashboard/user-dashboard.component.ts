import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  firstname = this.user.firstname;
  lastname = this.user.lastname;

  constructor() { }

  ngOnInit(): void {
  }

}
