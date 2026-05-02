import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // Account Settings
  emailNotifications: boolean = true;
  pushNotifications: boolean = false;
  twoFactorAuth: boolean = false;
  
  // Application Preferences
  darkMode: boolean = false;
  autoSave: boolean = true;
  language: string = 'en';
  
  // Privacy & Security
  profileVisibility: string = 'public';
  activityStatus: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    // Load settings from localStorage if available
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      Object.assign(this, settings);
    }
  }

  saveSettings(): void {
    const settings = {
      emailNotifications: this.emailNotifications,
      pushNotifications: this.pushNotifications,
      twoFactorAuth: this.twoFactorAuth,
      darkMode: this.darkMode,
      autoSave: this.autoSave,
      language: this.language,
      profileVisibility: this.profileVisibility,
      activityStatus: this.activityStatus
    };
    
    localStorage.setItem('userSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  }

  resetSettings(): void {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      this.emailNotifications = true;
      this.pushNotifications = false;
      this.twoFactorAuth = false;
      this.darkMode = false;
      this.autoSave = true;
      this.language = 'en';
      this.profileVisibility = 'public';
      this.activityStatus = true;
      
      localStorage.removeItem('userSettings');
      alert('Settings reset to default!');
    }
  }
}

// Made with Bob
