import {Injectable} from '@angular/core';
import {BehaviorSubject, map, tap} from 'rxjs';
import {ChatUserstate, Client} from 'tmi.js';
import {StreamEvent, StreamEvents, StreamMessage} from './stream.interface';

@Injectable({
  providedIn: 'root',
})
export class StreamsService {

  client?: Client;

  private _channels: Array<string> = [
    'auronplay',
    'Lana_Lux',
  ];

  private _channels$ = new BehaviorSubject<Array<string>>(this._channels);

  public get channels() {
    return this._channels$.asObservable()
  }

  private _messages: Array<StreamEvents> = [];
  private _messages$ = new BehaviorSubject<Array<StreamEvents>>(this._messages);

  public get messages() {
    return this._messages$.asObservable()
  }

  private events$ = this._channels$
    .pipe(tap(() => this.client?.disconnect()))
    .pipe(map((channels) => new Client({channels: [...channels]})))
    .pipe(tap((client) => client.connect()))
    .pipe(tap((client) => this.client = client))
    .subscribe((client: Client) => {
      client.on('message', (...props) => this.onMessage(...props));
    });

  private addMessage(message: StreamEvents) {
    this._messages = [...this._messages, message];
    this._messages$.next(this._messages);
  }

  public addChannel(channel: string) {
    const lowerChannel = channel.toLowerCase();
    if (!this._channels.includes(lowerChannel)) {
      this._channels = [...this._channels, lowerChannel];
      this._channels$.next(this._channels);
    }
  }

  public removeChannel(channel: string) {
    const lowerChannel = channel.toLowerCase();
    this._channels = [...this._channels.filter(channel => channel !== lowerChannel)];
    this._channels$.next(this._channels);
  }

  private onMessage(channel: string, userstate: ChatUserstate, message: string, _self: boolean) {
    const line: StreamMessage = {
      type: StreamEvent.Message,
      from: userstate['display-name'],
      color: userstate['color'],
      timestamp: userstate['tmi-sent-ts'],
      channel,
      message,
    };

    this.addMessage(line);
  }

}
