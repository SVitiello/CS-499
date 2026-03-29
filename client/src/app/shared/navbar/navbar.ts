import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private router: Router) {}

  // logout button navigates back to login page
  logout() {
    this.router.navigate(['/login']);
  }

  // makes it so logout button does not appear in navbar on login page
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
