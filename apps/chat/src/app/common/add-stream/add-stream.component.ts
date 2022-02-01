import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {StreamsService} from '../streams.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'twitch-client-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css'],
})
export class AddStreamComponent implements OnInit {

  @Input() withNavigation = false;
  @Output() done = new EventEmitter();

  get stream(): AbstractControl | null {
    return this.form.get('stream');
  }

  form = new FormGroup({
    stream: new FormControl('geometricjim', [Validators.required]),
  }, {updateOn: 'submit'})

  constructor(
    private streamsService: StreamsService,
    private router: Router,
    private title: Title,
  ) {
  }


  ngOnInit() {
    this.title.setTitle('Twitch Stream :: Home')
  }

  doSubmit() {
    if (this.form.invalid || !this.stream) {
      return
    }

    const streamName = this.stream.value;
    this.streamsService.addChannel(streamName);

    if (this.withNavigation) {
      this.router.navigate(['/', 'streams', streamName]);
    } else {
      this.done.emit();
    }
  }

  close() {
    this.done.emit();
  }

}
