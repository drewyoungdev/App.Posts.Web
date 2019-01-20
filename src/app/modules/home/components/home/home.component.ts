import { Component, OnInit } from '@angular/core';
import { MainPost } from 'src/app/models/mainPost';
import { CommentsService } from 'src/app/core/http/comments.service';
import { SnotifyService, SnotifyToast } from 'ng-snotify';

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

  constructor(private commentsService: CommentsService, private notifyService: SnotifyService) {
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
        this.notifyService.html(
          `
            <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div>
          `, {
          timeout: 0,
          showProgressBar: false,
          closeOnClick: false,
          position: "centerBottom",
          buttons: [
            { text: 'Undo', action: (toast) => this.notificationClick(toast), bold: true },
            { text: 'Close', action: (toast) => {console.log('Clicked: Later'); this.notifyService.remove(toast.id); } , bold: true },
          ]
        });
        this.mainFeed = data;
      }, 
      error => {
        this.mainFeedLoading = false;
        console.log(error);
      });
  }

  private notificationClick(toast: SnotifyToast) {
    console.log('clicked!');
    this.notifyService.remove(toast.id);
  }
}
