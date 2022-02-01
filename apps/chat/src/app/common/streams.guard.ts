import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {StreamsService} from './streams.service';

@Injectable({
  providedIn: 'root',
})
export class StreamsGuard implements CanActivateChild {
  constructor(
    private streamService: StreamsService,
    private router: Router,
  ) {
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const {params} = route;
    const {id} = params;

    return this.streamService.channels
      .pipe(map(channels => {
        if (!channels.length) {
          return this.router.createUrlTree(['/'])
        }

        if (!id || !channels.includes(id)) {
          return this.router.createUrlTree(['/', 'streams', channels[0]])
        }

        return true;
      }));
  }

}
