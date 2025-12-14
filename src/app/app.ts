import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from './translation.service';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Black Sugar 21');
  protected readonly ageVerified = signal(false);

  constructor(
    public translate: TranslationService,
    public firebase: FirebaseService
  ) {}

  ngOnInit() {
    // Check localStorage for age verification
    if (typeof localStorage !== 'undefined') {
      const verified = localStorage.getItem('ageVerified');
      if (verified === 'true') {
        this.ageVerified.set(true);
      }
    }

    // Sync language preference from Firebase if user is logged in
    if (this.firebase.currentUser()) {
      this.syncLanguageFromFirebase();
    }
  }

  async verifyAge() {
    this.ageVerified.set(true);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ageVerified', 'true');
    }

    // Save to Firebase if user is logged in
    const user = this.firebase.currentUser();
    if (user) {
      try {
        await this.firebase.saveAgeVerification(user.uid, true);
      } catch (error) {
        console.error('Error saving age verification to Firebase:', error);
      }
    }
  }

  t(key: string): string {
    return this.translate.translate(key);
  }

  async toggleLanguage(): Promise<void> {
    this.translate.toggleLanguage();
    
    // Sync to Firebase if user is logged in
    const user = this.firebase.currentUser();
    if (user) {
      try {
        await this.firebase.updateLanguagePreference(user.uid, this.translate.currentLanguage());
      } catch (error) {
        console.error('Error syncing language to Firebase:', error);
      }
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLanguage();
  }

  private async syncLanguageFromFirebase(): Promise<void> {
    const user = this.firebase.currentUser();
    if (user) {
      try {
        const savedLang = await this.firebase.getLanguagePreference(user.uid);
        if (savedLang) {
          this.translate.setLanguage(savedLang as 'es' | 'en');
        }
      } catch (error) {
        console.error('Error loading language from Firebase:', error);
      }
    }
  }
}
