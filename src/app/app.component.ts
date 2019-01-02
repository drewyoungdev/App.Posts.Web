import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comments = [
    {
      depth: 0,
      id: 1,
      parentId: 0,
      numOfHiddenReplies: 6,
      replies: [
        {
          depth: 1,
          id: 3,
          parentId: 1,
          numOfHiddenReplies: 3,
          replies: [
            {
              depth: 2,
              id: 2,
              parentId: 3
            }
          ]
        }
      ]
    },  
    {
      depth: 0,
      id: 4,
      parentId: 0
    },  
    {
      depth: 0,
      id: 5,
      parentId: 0
    }
  ];

  constructor() {

  }
}
