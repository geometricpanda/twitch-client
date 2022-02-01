import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, first, map, switchMap, tap} from 'rxjs';

import {faAngleDoubleDown, faBan, faPlus} from '@fortawesome/free-solid-svg-icons';

import {ModalComponent} from '../../common/modal/modal.component';
import {StreamsService} from '../../common/streams.service';
import {StreamComponent} from '../../common/stream/stream.component';

@Component({
  selector: 'twitch-client-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent {

  faPlus = faPlus;
  faBan = faBan;
  faAngleDoubleDown = faAngleDoubleDown;

  disableClose = false;
  pause = false;

  @ViewChild(ModalComponent)
  addStreamModal?: ModalComponent;

  @ViewChild(StreamComponent)
  streamComponent?: StreamComponent;

  activeId = this.route
    .paramMap
    .pipe(map(params => params.get('id')))

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private streamService: StreamsService,
  ) {
  }

  openAddStream() {
    this.pause = true;
    this.addStreamModal?.open();
  }

  closeAddStream() {
    this.pause = false;
    this.addStreamModal?.close();
  }

  removeStream() {
    this.route.paramMap
      .pipe(map(params => params.get('id') as string))
      .pipe(first())
      .pipe(filter(() => confirm('Are you sure you want to close this stream?')))
      .pipe(tap((stream) => this.streamService.removeChannel(stream)))
      .pipe(switchMap(() => this.streamService.channels))
      .subscribe((stream) => {
        if (stream.length) {
          this.router.navigate(['/', 'streams', stream[0]])
        } else {
          this.router.navigate(['/'])
        }
      })
  }

  scrollToBottom() {
    this.streamComponent?.scrollToBottom();
  }

}
