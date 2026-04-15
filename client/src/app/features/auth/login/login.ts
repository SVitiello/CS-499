import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  registerUsername = '';
  registerPassword = '';
  registerMessage = '';
  registerErrorMessage = '';

  constructor(private router: Router,
    private http: HttpClient,
    private cdr: ChangeDetectorRef) {}

  // Routes user to search page once credentials are entered.
  // JWT authentication added with enhancement 3
  login(): void {
    this.errorMessage = '';

    this.http.post<any>('http://localhost:3000/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        // Saves the session
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user.id);
        localStorage.setItem('username', response.user.username);

        this.cdr.detectChanges();

        // Send the user to the search page after login
        this.router.navigate(['/animals']);
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = error.error?.message || 'Login Failed';
        this.cdr.detectChanges();
      }
    });
  }

  // Connects registering new user from back-end to front end. Needed to log in due to JWT auth.
  register(): void {
    this.registerMessage = '';
    this.registerErrorMessage = '';

    this.http.post<any>('http://localhost:3000/api/auth/register', {
      username: this.registerUsername,
      password: this.registerPassword
    }).subscribe({
      next: (response) => {
        this.registerMessage = response.message || 'User registered successfully. Log in to continue.';
        this.registerUsername = '';
        this.registerPassword = '';
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Registration failed:', error);
        this.registerErrorMessage = error.error?.message || 'User registration failed.';
        this.cdr.detectChanges();
      }
    });
  }
}
