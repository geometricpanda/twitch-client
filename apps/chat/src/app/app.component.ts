import {Component, HostListener} from '@angular/core';
import {NosleepService} from './common/nosleep.service';

@Component({
  selector: 'twitch-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @HostListener('keydown')
  onKeydown() {
    this.noSleep.enable();
  }

  @HostListener('click')
  onClick() {
    this.noSleep.enable();
  }

  constructor(private noSleep: NosleepService) {
  }
}
