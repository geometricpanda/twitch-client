import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChannelsService} from '../../common/channels.service';
import {Router} from '@angular/router';

@Component({
  selector: 'twitch-client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  form = new FormGroup({
    stream: new FormControl('https://www.twitch.tv/geometricjim', [Validators.required]),
  }, {
    updateOn: 'blur',
  })

  constructor(
    private channelsService: ChannelsService,
    private router: Router,
  ) {
  }

  get stream(): AbstractControl | null {
    return this.form.get('stream');
  }

  doSubmit() {
    if (this.form.invalid || !this.stream) {
      return
    }

    const streamName = this.stream.value;
    this.channelsService.addChannel(streamName);
    this.router.navigate(['/','screens']);
  }

}
