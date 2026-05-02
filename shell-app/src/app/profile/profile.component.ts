import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  memberSince: Date = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername() || 'User';
    // Set member since to 30 days ago for demo
    this.memberSince = new Date();
    this.memberSince.setDate(this.memberSince.getDate() - 30);
  }
}

// Made with Bob
