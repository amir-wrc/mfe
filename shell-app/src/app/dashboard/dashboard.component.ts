import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedDataService } from '../services/shared-data.service';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

interface RemoteApp {
  name: string;
  title: string;
  icon: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';
  selectedApp: string = 'home';
  
  remoteApps: RemoteApp[] = [
    {
      name: 'todo',
      title: 'Todo App',
      icon: '✓',
      color: '#4CAF50',
      route: '/dashboard/todo'
    },
    {
      name: 'shopping',
      title: 'Shopping Cart',
      icon: '🛒',
      color: '#FF9800',
      route: '/dashboard/shopping'
    }
  ];

  commonMenuItems: MenuItem[] = [
    { label: 'Home', route: '/dashboard', icon: '🏠' },
    { label: 'Profile', route: '/dashboard/profile', icon: '👤' },
    { label: 'Settings', route: '/dashboard/settings', icon: '⚙️' }
  ];

  todoMenuItems: MenuItem[] = [
    { label: 'All Tasks', route: '/dashboard/todo/all', icon: '📋' },
    { label: 'Active Tasks', route: '/dashboard/todo/active', icon: '✓' },
    { label: 'Completed', route: '/dashboard/todo/completed', icon: '✔️' }
  ];

  shoppingMenuItems: MenuItem[] = [
    { label: 'Products', route: '/dashboard/shopping/products', icon: '📦' },
    { label: 'Cart', route: '/dashboard/shopping/cart', icon: '🛒' },
    { label: 'Orders', route: '/dashboard/shopping/orders', icon: '📜' }
  ];

  currentMenuItems: MenuItem[] = [];

  constructor(
    private authService: AuthService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername() || 'User';
    this.currentMenuItems = this.commonMenuItems;
  }

  selectApp(appName: string): void {
    this.selectedApp = appName;
    
    if (appName === 'todo') {
      this.currentMenuItems = [...this.commonMenuItems, ...this.todoMenuItems];
//       const child = window.open('http://localhost:4201', '_blank');
//       setTimeout(() => {
//   child?.postMessage(
//     {
//       userData: (window as any).shellUserData,
//       token: localStorage.getItem('auth_token')
//     },
//     'http://localhost:4201'
//   );
// }, 1000);
      this.router.navigate(['/dashboard/todo']);
    } else if (appName === 'shopping') {
      this.currentMenuItems = [...this.commonMenuItems, ...this.shoppingMenuItems];
      this.router.navigate(['/dashboard/shopping']);
    } else {
      this.currentMenuItems = this.commonMenuItems;
      this.router.navigate(['/dashboard']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.sharedDataService.clearUserData();
    this.router.navigate(['/login']);
  }
}
