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
        },
        {
          depth: 1,
          id: 6,
          parentId: 1,
          numOfHiddenReplies: 2,
          replies: [
            {
              depth: 2,
              id: 7,
              parentId: 6,
              replies: [
                {
                  depth: 3,
                  id: 8,
                  parentId: 7,
                  replies: [
                    {
                      depth: 4,
                      id: 9,
                      parentId: 8,
                      numOfHiddenReplies: 23
                    },
                    {
                      depth: 4,
                      id: 10,
                      parentId: 8,
                      replies: [
                        {
                          depth: 5,
                          id: 11,
                          parentId: 10,
                          replies: [
                            {
                              depth: 6,
                              id: 12,
                              parentId: 11
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],    
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
