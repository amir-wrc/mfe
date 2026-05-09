import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shell/AuthService';

interface UserData {
  username: string;
  email: string;
  token: string;
  timestamp: number;
}

@Component({
  selector: 'app-user-info',
  template: `
    <div class="user-info-banner" *ngIf="userData">
      <div class="user-info-content">
        <span class="info-icon">👤</span>
        <div class="user-details">
          <strong>{{ userData.username }}</strong>
          <span class="user-email">{{ userData.email }}</span>
        </div>
        <div class="token-info">
          <span class="token-label">Token:</span>
          <code class="token-value">{{ token | slice:0:20 }}...</code>
        </div>
      </div>
    </div>
    <div class="user-info-banner error" *ngIf="!userData">
      <span class="info-icon">⚠️</span>
      <span>No user data available from shell app</span>
    </div>
  `,
  styles: [`
    .user-info-banner {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .user-info-banner.error {
      background: #ff6b6b;
    }

    .user-info-content {
      display: flex;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .info-icon {
      font-size: 24px;
    }

    .user-details {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .user-details strong {
      font-size: 16px;
    }

    .user-email {
      font-size: 12px;
      opacity: 0.9;
    }

    .token-info {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 12px;
      border-radius: 6px;
    }

    .token-label {
      font-size: 12px;
      font-weight: 600;
    }

    .token-value {
      font-size: 11px;
      background: rgba(0, 0, 0, 0.2);
      padding: 4px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }

    @media (max-width: 768px) {
      .token-info {
        margin-left: 0;
        width: 100%;
      }
    }
  `]
})
export class UserInfoComponent implements OnInit {
  userData: UserData | null = null;
  token: string | null = null;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    // Get user data from window object (shared by shell app)
    this.userData = (window as any).shellUserData || null;
    this.token = this.authService.getToken();

    // Log for debugging
    console.log('Todo App - Received user data:', this.userData,this.authService.getToken());
  }
}

// Made with Bob
