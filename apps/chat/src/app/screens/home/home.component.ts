import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../common/modal/modal.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'twitch-client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalComponent)
  modal!: ModalComponent;

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Home :: Twitch Stream')
  }

  ngAfterViewInit() {
    this.modal.open();
  }

}
