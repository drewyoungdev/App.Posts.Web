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
      author: 'userNumeroUno12',
      points: 2332,
      body: 'Lorem ipsum dolor sit amet, ne vis stet interpretaris, vis vocibus tacimates delicatissimi ad. Per viderer equidem ex. Tale eirmod vis et, vix ad iudicabit mediocritatem, eos ad maiorum deleniti molestiae. Ea vix sumo consul, at vim dicit affert impedit, ea nec wisi ignota liberavisse. Dolores noluisse instructior an pri, timeam principes no has. An sit inani viris accumsan.',
      createDate: '2019-01-03T23:12:11',
      numOfHiddenReplies: 6,
      replies: [
        {
          depth: 1,
          id: 3,
          parentId: 1,
          author: 'userNumeroUno12',
          points: 2332,
          body: 'Lorem ipsum dolor sit amet, usu nostro labitur in, nam ad harum.',
          createDate: '2019-01-04T04:25:11',
          numOfHiddenReplies: 3,
          replies: [
            {
              depth: 2,
              id: 2,
              parentId: 3,
              replies: []
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
                      numOfHiddenReplies: 23,
                      replies: []
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
                              parentId: 11,
                              mustContinueInNewThread: true,
                              replies: []
                            },
                            {
                              depth: 6,
                              id: 13,
                              parentId: 11,
                              numOfHiddenReplies: 12,
                              replies: []
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
      parentId: 0,
      replies: []
    },  
    {
      depth: 0,
      id: 5,
      parentId: 0,
      replies: []
    }
  ];

  constructor() {

  }
}
