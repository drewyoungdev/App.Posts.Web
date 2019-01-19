import { Component, OnInit } from '@angular/core';
import { MainPost } from 'src/app/models/mainPost';
import { CommentsService } from 'src/app/core/http/comments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// TODO: Add secondary table for main-post attributes (title, subreddit, image, link)
// TODO: Allow home to toggle main-post view for card/panel options
// TODO: Link main feed and post-with-replies component to same subscription for main-post
export class HomeComponent implements OnInit {
  mainFeed: MainPost[] = new Array<MainPost>();
  mainFeedLoading: boolean;

  constructor(private commentsService: CommentsService) {
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
        this.mainFeed = data;
      }, 
      error => {
        this.mainFeedLoading = false;
        console.log(error);
      });
  }
}
