import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class JuiSubscribeControl extends Subject<void> implements OnDestroy {
  constructor() {
    super();
  }

  public ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
