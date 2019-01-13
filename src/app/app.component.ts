import { Component, OnInit } from '@angular/core';
import { CommentsService } from './shared/services/comments.service';
import { Post } from './models/post';
import { MainPost } from './models/mainPost';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comments: Post[];
  mainPost: MainPost;

  isServerRunning: boolean = false;

  // TODO: Implement hover event on thread to display parent thread info if it is not in viewport
  // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  // TODO: Don't reset position when loading new content
  constructor(private commentsService : CommentsService) {
  }
  
  ngOnInit(): void {
    if (this.isServerRunning) {
      this.getReplies('1', environment.defaultSortType);
    }
    else {
      this.setMockData();
    }
  }

  // selected sort dropdown option drives what the default criteria will be
  onSortChange($event) {
    if (this.isServerRunning) {
      this.getReplies('1', $event);
    }
    else {
      if ($event === 'Best') {
        this.setMockData();
      }
      else if ($event === 'Top') {
        this.reloadReplies();
      }
      else {
        this.comments = [];
      }
    }
  }

  private getReplies(parentId: string, sortType: string) {
    this.commentsService.getReplies(parentId, sortType).subscribe(
      data => {
        this.comments = data;
      }, 
      error => {
        console.log(error);
      });
  };
  
  replySubmitted() {
    // Simulate server returning new Post record
    var newComment = new Post();
    newComment.parentId = this.mainPost.id;
    newComment.id = Math.random().toString();
    newComment.body = 'Test Comment';

    // push new comment to top of array
    // if type does not match setMockData it will not reload ngFor
    // refactor either all to create instances of Post or keep both using objects
    this.comments.unshift(
      { 
        parentId: this.mainPost.id, 
        id: Math.random().toString(),
        depth: 0,
        author: 'new_user',
        score: 1,
        body: 'New Direct Reply',
        createDate: '2019-01-03T23:12:11',
        numOfHiddenReplies: 0,
        mustContinueInNewThread: false,
        replies: []
      }
    );
  }
  
  private reloadReplies() {
    this.comments = [    
      {
        depth: 0,
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

  private setMockData() {
    this.mainPost = {
      id: '123',
      author: 'main_poster',
      score: 503233,
      body: 'Read the description!',
      createDate: '2019-01-03T23:12:11',
      numOfHiddenReplies: 6,
      title: 'Hello World!',
      subThread: '/r/HelloWorld'
    };

    this.comments = [
        {
          depth: 0,
          id: '1',
          parentId: '123',
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
        },
        {
          depth: 0,
          id: '54',
          parentId: '123',
          author: 'userNumeroUno12',
          score: 2332,
          body: 'Lorem ipsum dolor sit amet, ne vis stet interpretaris, vis vocibus tacimates delicatissimi ad. Per viderer equidem ex. Tale eirmod vis et, vix ad iudicabit mediocritatem, eos ad maiorum deleniti molestiae. Ea vix sumo consul, at vim dicit affert impedit, ea nec wisi ignota liberavisse. Dolores noluisse instructior an pri, timeam principes no has. An sit inani viris accumsan.',
          createDate: '2019-01-03T23:12:11',
          numOfHiddenReplies: 6,
          mustContinueInNewThread: false,
          replies: [
          ]
        },
        {
          depth: 0,
          id: '33',
          parentId: '123',
          author: 'userNumeroUno12',
          score: 2332,
          body: 'Lorem ipsum dolor sit amet, ne vis stet interpretaris, vis vocibus tacimates delicatissimi ad. Per viderer equidem ex. Tale eirmod vis et, vix ad iudicabit mediocritatem, eos ad maiorum deleniti molestiae. Ea vix sumo consul, at vim dicit affert impedit, ea nec wisi ignota liberavisse. Dolores noluisse instructior an pri, timeam principes no has. An sit inani viris accumsan.',
          createDate: '2019-01-03T23:12:11',
          numOfHiddenReplies: 6,
          mustContinueInNewThread: false,
          replies: [
          ]
        },
        {
          depth: 0,
          id: '23',
          parentId: '123',
          author: 'userNumeroUno12',
          score: 2332,
          body: 'Lorem ipsum dolor sit amet, ne vis stet interpretaris, vis vocibus tacimates delicatissimi ad. Per viderer equidem ex. Tale eirmod vis et, vix ad iudicabit mediocritatem, eos ad maiorum deleniti molestiae. Ea vix sumo consul, at vim dicit affert impedit, ea nec wisi ignota liberavisse. Dolores noluisse instructior an pri, timeam principes no has. An sit inani viris accumsan.',
          createDate: '2019-01-03T23:12:11',
          numOfHiddenReplies: 6,
          mustContinueInNewThread: false,
          replies: [
          ]
        }
      ];
  }
}
