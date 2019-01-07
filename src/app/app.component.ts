import { Component, OnInit } from '@angular/core';
import { CommentsService } from './shared/services/comments.service';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comments: Post[];

  constructor(private commentsService : CommentsService) {
  }
  
  ngOnInit(): void {
    this.getReplies('10');
    //this.setMockData();
  }

  private getReplies(parentId: string) {
    this.commentsService.getReplies(parentId, 'best').subscribe(
      data => {
        this.comments = data;
      }, 
      error => {
        console.log(error);
      });
  };

  private setMockData() {
  this.comments = [
      {
        depth: 0,
        id: '1',
        parentId: '0',
        author: 'userNumeroUno12',
        score: 2332,
        body: 'Lorem ipsum dolor sit amet, ne vis stet interpretaris, vis vocibus tacimates delicatissimi ad. Per viderer equidem ex. Tale eirmod vis et, vix ad iudicabit mediocritatem, eos ad maiorum deleniti molestiae. Ea vix sumo consul, at vim dicit affert impedit, ea nec wisi ignota liberavisse. Dolores noluisse instructior an pri, timeam principes no has. An sit inani viris accumsan.',
        createDate: '2019-01-03T23:12:11',
        numOfHiddenReplies: 6,
        mustContinueInNewThread: false,
        replies: [
          {
            depth: 1,
            id: '3',
            parentId: '1',
            author: 'userNumeroUno12',
            score: 2332,
            body: 'Lorem ipsum dolor sit amet, usu nostro labitur in, nam ad harum.',
            createDate: '2019-01-04T04:25:11',
            numOfHiddenReplies: 3,
            mustContinueInNewThread: false,
            replies: [
              {
                depth: 2,
                id: '2',
                parentId: '3',
                author: 'test_this_out12',
                score: -23,
                body: 'That is good!',
                createDate: '2019-01-04T04:25:11',
                numOfHiddenReplies: 0,
                mustContinueInNewThread: false,
                replies: []
              }
            ]
          }
        ],    
      }
    ];
  }
}
