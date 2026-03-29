import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router) {}

  // Routes user to search page once credentials are entered.
  // Currently no authentication, just anything entered will re-route. JWT auth will be
  // built later with database.
  login() {
    if (this.username && this.password) {
      this.router.navigate(['/animals']);
    }
  }

}
