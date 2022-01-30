import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {

  channels = new BehaviorSubject<Array<string>>([])

  constructor() {
  }

  addChannel(path: string) {
    const newChannels = [
      ...this.channels.value,
      path,
    ];

    this.channels.next(newChannels);
  }
}
