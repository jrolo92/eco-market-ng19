import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

// Pipado para los precios
import { EuroCurrencyPipe } from './pipes/euro-currency.pipe';

// Datos Bidireccionales [(ngModel)]
import { FormsModule } from '@angular/forms';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { providePrimeNG } from 'primeng/config';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import Aura from '@primeng/themes/aura';
import { DialogModule } from 'primeng/dialog';

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { provideAnimations } from "@angular/platform-browser/animations";

const firebaseConfig = {
  apiKey: "AIzaSyB0k9TWy6k15sZV7O18M4nWnEepAe6x6RA",
  authDomain: "eco-market-ang.firebaseapp.com",
  projectId: "eco-market-ang",
  storageBucket: "eco-market-ang.firebasestorage.app",
  messagingSenderId: "703740449827",
  appId: "1:703740449827:web:fe04760e2a948c03bd4d96",
  measurementId: "G-21953CHKQ1"
};

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EuroCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule, ButtonModule, CardModule,
    IconFieldModule, InputIconModule, DialogModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    providePrimeNG({ 
        theme: {
            preset: Aura, 
            options: {
              darkModeSelector: 'none'
            }
        }
    }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
