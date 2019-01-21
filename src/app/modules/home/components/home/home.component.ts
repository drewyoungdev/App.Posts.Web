import { Component, OnInit } from '@angular/core';
import { MainPost } from 'src/app/models/mainPost';
import { CommentsService } from 'src/app/core/http/comments.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// TODO: Add secondary table for main-post attributes (title, subreddit, image, link)
// TODO: Allow home to toggle main-post view for card/panel options
// TODO: Link main feed and post-with-replies component to same subscription for main-post
// TODO: Refactor skeleton pages to re-use css
export class HomeComponent implements OnInit {
  mainFeed: MainPost[] = new Array<MainPost>();
  mainFeedLoading: boolean;

  constructor(private commentsService: CommentsService, private notificationService: NotificationService) {
  }
  
  ngOnInit(): void {
    this.getMainFeed('Best');
  }

  private getMainFeed(sortType: string) {
    this.mainFeedLoading = true;
    // should subscribe to the same main post that's loaded in post-with-replies
    this.commentsService.getMainFeed(sortType).subscribe(
      data => {
        this.mainFeedLoading = false;
        this.notificationService.info('hello info!');
        this.notificationService.undo('hello undo!', () => this.undoAction());
        this.notificationService.warning('hello warning!');
        this.notificationService.error('hello error!');
        this.mainFeed = data;
      }, 
      error => {
        this.mainFeedLoading = false;
        console.log(error);
      });
  }

  private undoAction() {
    console.log('clicked!');
  }
}
