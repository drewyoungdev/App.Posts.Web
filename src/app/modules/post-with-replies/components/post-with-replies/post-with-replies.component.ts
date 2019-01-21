import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { MainPost } from 'src/app/models/mainPost';
import { CommentsService } from 'src/app/core/http/comments.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-with-replies',
  templateUrl: './post-with-replies.component.html',
  styleUrls: ['./post-with-replies.component.scss']
})
export class PostWithRepliesComponent implements OnInit {
  id: string;
  mainPost: MainPost;
  comments: Post[];
  commentsLoading: boolean;

  // TODO: Implement hover event on thread to display parent thread info if it is not in viewport
  // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  // TODO: Don't reset position when loading new content
  // TODO: How to handle multiple subscriptions
  // TODO: Update main-post to use actual data
  // TODO: Update to allow actual POST of data to db
  // TODO: Tooltips and ability to display user specific information
  constructor(private route: ActivatedRoute, private commentsService: CommentsService) {
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getMainPost(this.id);
    this.getReplies(this.id, environment.defaultSortType);
  }

  onSortChange($event) {
    this.getReplies(this.id, $event);
  }

  private getMainPost(id: string) {
    // should subscribe to the same main post that was loaded on home
    this.commentsService.getMainPost(id).subscribe(
      data => {
        this.mainPost = data;
      }, 
      error => {
        console.log(error);
      });
  }

  private getReplies(parentId: string, sortType: string) {
    this.commentsLoading = true;
    this.commentsService.getReplies(parentId, sortType).subscribe(
      data => {
        this.commentsLoading = false;
        this.comments = data;
      }, 
      error => {
        this.commentsLoading = false;
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
}
