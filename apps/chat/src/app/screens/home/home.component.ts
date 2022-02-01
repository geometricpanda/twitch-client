import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ModalComponent} from '../../common/modal/modal.component';

@Component({
  selector: 'twitch-client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(ModalComponent)
  modal!: ModalComponent;

  ngAfterViewInit() {
    this.modal.open();
  }

}
