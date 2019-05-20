import { Component, OnInit, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss']
})
export class MainPostComponent implements OnInit {
  @Input()
  comment : Post;
  
  @Input()
  displayStickyHeader: boolean = false;

  @ViewChild('mainPost') 
  elementView: ElementRef;

  mainPostHeight: number;
  isStickied: boolean = false;
  isSaved: boolean = false; // eventuallly will be pulled from server
  
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainPostHeight = this.elementView.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.displayStickyHeader)
    {
      var mainPostHeight = this.mainPostHeight;
      if (window.pageYOffset > mainPostHeight) {
        this.isStickied = true;
      } else {
        this.isStickied = false;
      }
    }
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
