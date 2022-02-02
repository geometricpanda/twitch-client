import {Injectable} from '@angular/core';
import {BehaviorSubject, map, noop, tap} from 'rxjs';
import {ChatUserstate, Client} from 'tmi.js';
import {StreamChat, StreamEvent, StreamEvents, StreamMessage} from './stream.interface';

@Injectable({
  providedIn: 'root',
})
export class StreamsService {

  client?: Client;

  private _channels: Array<string> = [];
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
      client.on('action', (...props) => console.log('action', ...props));
      client.on('anongiftpaidupgrade', (...props) => console.log('anongiftpaidupgrade', ...props));
      client.on('anonsubmysterygift', (...props) => console.log('anonsubmysterygift', ...props));
      client.on('anonsubgift', (...props) => console.log('anonsubgift', ...props));
      client.on('automod', (...props) => console.log('automod', ...props));
      client.on('ban', (...props) => console.log('ban', ...props));
      client.on('chat', (...props) => this.onChat(...props));
      client.on('clearchat', (...props) => console.log('clearchat', ...props));
      client.on('emoteonly', (...props) => console.log('emoteonly', ...props));
      client.on('emotesets', (...props) => console.log('emoteonly', ...props));
      client.on('followersonly', (...props) => console.log('followersonly', ...props));
      client.on('giftpaidupgrade', (...props) => console.log('giftpaidupgrade', ...props));
      client.on('hosted', (...props) => console.log('hosted', ...props));
      client.on('hosting', (...props) => console.log('hosting', ...props));
      client.on('join', (...props) => this.onJoin(...props));
      client.on('message', noop);
      client.on('messagedeleted', (...props) => console.log('messagedeleted', ...props));
      client.on('mod', (...props) => console.log('mod', ...props));
      client.on('mods', (...props) => console.log('mods', ...props));
      client.on('notice', (...props) => console.log('notice', ...props));
      client.on('part', (...props) => console.log('part', ...props));
      client.on('primepaidupgrade', (...props) => console.log('primepaidupgrade', ...props));
      client.on('raided', (...props) => console.log('raided', ...props));
      client.on('redeem', (...props) => console.log('redeem', ...props));
      client.on('resub', (...props) => console.log('resub', ...props));
      client.on('roomstate', noop);
      client.on('slowmode', (...props) => console.log('slowmode', ...props));
      client.on('subgift', (...props) => console.log('subgift', ...props));
      client.on('submysterygift', (...props) => console.log('submysterygift', ...props));
      client.on('subscribers', (...props) => console.log('subscribers', ...props));
      client.on('subscription', (...props) => console.log('subscription', ...props));
      client.on('timeout', (...props) => console.log('timeout', ...props));
      client.on('unhost', (...props) => console.log('unhost', ...props));
      client.on('unmod', (...props) => console.log('unmod', ...props));
      client.on('vips', (...props) => console.log('vips', ...props));
      client.on('whisper', (...props) => console.log('whisper', ...props));
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

  private onChat(channel: string, userstate: ChatUserstate, message: string, _self: boolean) {
    const event: StreamMessage = {
      type: StreamEvent.Message,
      from: userstate['display-name'],
      color: userstate['color'],
      timestamp: userstate['tmi-sent-ts'],
      channel,
      message,
    };

    this.addMessage(event);
  }

  private onJoin(channel: string, from: string, _self: boolean) {
    console.log(channel, from, _self);
    if (_self) {
      return;
    }
    console.log(channel, from);
    const event: StreamChat = {
      type: StreamEvent.Join,
      channel,
      from,
    }
    this.addMessage(event);
  }

}
