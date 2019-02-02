import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor ( public _settings: SettingsService) { }

  ngOnInit() {
    this.loadCheck();
  }

  setTheme(theme: string, ref: any) {
    this.refreshCheck(ref);
    this._settings.applyTheme(theme);


  }
  refreshCheck( ref: any) {
    const selectors: any = document.getElementsByClassName('selector');
    for ( const forRef of selectors) {
      forRef.classList.remove('working');
    }
    ref.classList.add('working');
  }

  loadCheck() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;
    for ( const forRef of selectors) {
      if ( forRef.getAttribute('data-theme') === theme) {
        forRef.classList.add('working');

        break;
      }
    }
  }

}
