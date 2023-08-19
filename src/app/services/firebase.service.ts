import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // private readonly FIREBASE_CONFIG = environment.firebaseConfig;

  constructor() { }

  public initialize(): void {
    // const app = initializeApp(this.FIREBASE_CONFIG);
    // const analytics = getAnalytics(app);
    // const performance = getPerformance(app);
  }
}
