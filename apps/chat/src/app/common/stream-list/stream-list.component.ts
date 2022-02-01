import {Component} from '@angular/core';
import {StreamsService} from '../streams.service';

@Component({
  selector: 'twitch-client-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css'],
})
export class StreamListComponent {

  constructor(public streamsService: StreamsService) {
  }

}
