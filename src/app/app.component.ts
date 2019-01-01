import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comment = {
    depth: 0,
    id: 3,
    parentId: 0,
    replies: [
      {
        depth: 0,
        id: 3,
        parentId: 0
      }
    ]
  };

  constructor() {

  }
}
