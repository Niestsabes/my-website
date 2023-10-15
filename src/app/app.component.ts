import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { LocaleService } from './services/locale.service';
import { MetadataService } from './services/metadata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _firebaseService: FirebaseService,
    private _localeService: LocaleService,
    private _metadataService: MetadataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._firebaseService.initialize();
    this._localeService.loadLocale();
    this._metadataService.updateMetadata();

    this._localeService.localeChange.subscribe(() => {
      this._router.navigate([this._router.url],{skipLocationChange:true});
    });
  }
}
