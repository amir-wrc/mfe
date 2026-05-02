import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface UserData {
  username: string;
  email: string;
  token: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userDataSubject = new BehaviorSubject<UserData | null>(null);
  public userData$: Observable<UserData | null> = this.userDataSubject.asObservable();

  constructor(private authService: AuthService) {
    // Load user data from localStorage if available
    this.loadUserData();
  }

  setUserData(username: string): void {
    const userData: UserData = {
      username: username,
      email: `${username}@example.com`,
      token: this.generateToken(username),
      timestamp: Date.now()
    };
    
    // Store in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Emit to subscribers
    this.userDataSubject.next(userData);

    // Set token in AuthService for authentication in remote apps
    this.authService.setToken(userData.token);
    
    // Also set in window for remote apps to access
    (window as any).shellUserData = userData;
  }

  getUserData(): UserData | null {
    return this.userDataSubject.value;
  }

  clearUserData(): void {
    localStorage.removeItem('userData');
    this.userDataSubject.next(null);
    delete (window as any).shellUserData;
  }

  private loadUserData(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      this.userDataSubject.next(userData);
      (window as any).shellUserData = userData;
    }
  }

  private generateToken(username: string): string {
    // Simple token generation (in production, use proper JWT)
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    return btoa(`${username}:${timestamp}:${randomStr}`);
  }
}

// Made with Bob
