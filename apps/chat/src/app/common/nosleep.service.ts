import {Injectable} from '@angular/core';
import NoSleep from 'nosleep.js';

@Injectable({
  providedIn: 'root',
})
export class NosleepService {

  private noSleep = new NoSleep();

  enable() {
    if (!this.isEnabled) {
      this.noSleep.enable();
    }
  }

  disable() {
    if (this.isEnabled) {
      this.noSleep.disable();
    }
  }

  get isEnabled() {
    return this.noSleep.isEnabled;
  }

}
