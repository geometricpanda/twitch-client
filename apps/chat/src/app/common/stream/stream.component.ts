import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import {StreamsService} from '../streams.service';
import {filter, Subscription, throttleTime} from 'rxjs';
import {StreamEvent} from '../stream.interface';


@Component({
  selector: 'twitch-client-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('chatContainer')
  chatContainer?: ElementRef<HTMLDivElement>;

  @ViewChildren('chatMessage')
  chatMessage?: QueryList<ElementRef<HTMLDivElement>>

  @Input() streamId: string | null = null
  @Input() pause = false;

  chatMessage$?: Subscription;
  StreamEvent = StreamEvent;

  messages = this.streamService
    .messages
    .pipe(filter(() => !this.pause))
    .pipe(throttleTime(500))

  autoscroll = true;

  constructor(private streamService: StreamsService) {
  }

  ngAfterViewInit() {
    this.chatMessage$ = this.chatMessage?.changes
      .pipe(filter(() => this.autoscroll))
      .subscribe(() => this.scrollToBottom())
  }

  ngOnChanges() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    this.chatMessage$?.unsubscribe();
  }

  private isUserNearBottom(): boolean {
    if (!this.chatContainer) {
      return false;
    }

    const {scrollTop, offsetHeight, scrollHeight} = this.chatContainer.nativeElement;

    const threshold = 250;
    const position = scrollTop + offsetHeight;
    return position > scrollHeight - threshold;
  }

  onScroll() {
    this.autoscroll = this.isUserNearBottom();
  }

  scrollToBottom() {
    if (!this.chatContainer) {
      return;
    }

    const {scrollHeight} = this.chatContainer.nativeElement;
    this.chatContainer.nativeElement.scrollTo({top: scrollHeight})
  }

}
