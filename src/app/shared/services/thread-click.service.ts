// TODO: Move into comments component folder as this service should only be used in there
import { Subject } from 'rxjs';
import { ThreadClick } from 'src/app/models/threadClick';

export class ThreadClickEventEmitter extends Subject<ThreadClick>{
  constructor() {
      super();
  }
  emit(value: ThreadClick) { super.next(value); }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThreadClickService {
  Stream : ThreadClickEventEmitter;
  constructor() { 
    this.Stream = new ThreadClickEventEmitter();
  }
}
