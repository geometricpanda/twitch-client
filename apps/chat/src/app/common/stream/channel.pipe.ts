import {Pipe, PipeTransform} from '@angular/core';
import {StreamEvents} from '../stream.interface';

@Pipe({
  name: 'channel',
  pure: false,
})
export class ChannelPipe implements PipeTransform {

  transform(streamEvents: Array<StreamEvents> | null, currentStream: string | null): Array<StreamEvents> | null {
    return streamEvents
      ? streamEvents.filter(streamEvent =>
        streamEvent.channel.toLowerCase() === `#${currentStream}`.toLowerCase())
      : null;
  }

}
