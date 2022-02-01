import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StreamsService} from '../streams.service';

@Component({
  selector: 'twitch-client-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css'],
})
export class AddStreamComponent {

  @Input() withNavigation = false;
  @Output() done = new EventEmitter();

  get stream(): AbstractControl | null {
    return this.form.get('stream');
  }

  form = new FormGroup({
    stream: new FormControl('', [Validators.required]),
  }, {updateOn: 'submit'})

  constructor(
    private streamsService: StreamsService,
    private router: Router,
  ) {
  }

  doSubmit() {
    if (this.form.invalid || !this.stream) {
      return
    }

    const input = this.stream.value
      .split('/')
      .filter((segment: string) => segment !== '/');

    const streamName = input[input.length - 1];
    this.streamsService.addChannel(streamName);
    this.form.reset();

    this.router.navigate(['/', 'streams', streamName]);
    this.done.emit();
  }

  close() {
    this.done.emit();
  }

}
