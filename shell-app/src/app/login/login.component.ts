import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      // Set user data in shared service for remote apps
      this.sharedDataService.setUserData(this.username);
      localStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please enter valid credentials';
    }
  }
}
