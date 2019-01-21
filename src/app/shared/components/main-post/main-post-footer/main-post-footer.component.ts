import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'main-post-footer',
  templateUrl: './main-post-footer.component.html',
  styleUrls: ['./main-post-footer.component.scss']
})
export class MainPostFooterComponent implements OnInit {
  isSaved: boolean = false; // eventually will be pulled in from server

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  // Create a more generic Footer component so we don't have to re-do all of this logic
  onShare($event) {
    $event.stopPropagation(); // stops routerLink from being triggered
    this.notificationService.info('Copied link!');
  }

  onSave($event) {
    $event.stopPropagation(); // stops routerLink from being triggered
    // essentially this would make http request to save post to user
    // if successful, then notification service for undo would appear
    // also give user a callback function to undo which would call this method again
    this.isSaved = !this.isSaved;
    var notificationText = this.isSaved ? 'saved' : 'unsaved';
    this.notificationService.undo(`Post ${notificationText} successfully!`, () => this.onSave($event));
    // if failure, then notification service failure would apper
  }
}
