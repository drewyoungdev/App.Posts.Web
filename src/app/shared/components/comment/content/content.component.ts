import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ThreadClickService } from 'src/app/shared/services/thread-click.service';
import { ThreadClick } from 'src/app/models/threadClick';
import { Subscription } from 'rxjs';

@Component({
  selector: 'comment-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  @Input()
  comment : Post;

  @Output()
  replyClickedEvent = new EventEmitter<boolean>()

  collapsed : boolean = false;
  numOfChildrenHidden : number;
  showReply : boolean = false;

  subscription : Subscription;
  
  constructor(private threadClickService : ThreadClickService) { }

  ngOnInit() {
    this.subscription = this.threadClickService.Stream.subscribe(threadClick => {
      return this.processThreadClick(threadClick);
    });
  }

  replyClicked($event) {
    this.showReply = $event;
  }
  
  replyCancelled($event) {
    // show reply is false if event returns true (meaning reply was cancelled)
    this.showReply = !$event;
  }
  
  replySubmitted($event) {
    // show reply is false if event returns true (meaning reply was submitted)
    this.showReply = !$event;

    // Simulate server returning new Post record
    var newComment = new Post();
    newComment.parentId = this.comment.id;
    newComment.depth = this.comment.depth + 1;
    newComment.id = Math.random().toString();
    newComment.body = 'Test Comment';
    
    if (newComment.depth == 6) {      
      // if post coming back is MaxDepth - 1, then force user to enter new thread
      newComment.mustContinueInNewThread = true;
    }
    
    // push new comment to top of array
    this.comment.replies.unshift(newComment)
  }

  processThreadClick(threadClick : ThreadClick) {
    if (threadClick.id == this.comment.id) {
      this.collapsed = threadClick.shouldHide;

      var numOfChildrenHidden = this.toggleChildren(threadClick.id, threadClick.depth, threadClick.shouldHide);

      if (threadClick.shouldHide)
      {        
        this.numOfChildrenHidden = numOfChildrenHidden;
      }
    }
  }

  // TODO: Move into it's own service
  private toggleChildren(parentId : string, depth: number, shouldHide : boolean) : number {
    var parentElement = document.getElementById(parentId);
    var nextElem = parentElement.nextElementSibling;

    // while next sibling does not contain same comment-depth-x as parent (all elements under parent in same depth)
    var numOfChildrenHidden = 0;
    while (nextElem != null && !nextElem.classList.contains('comment-depth-' + depth))
    {
      // hide/show all elements with the same or greater depth (max of 6)
      for (var i = depth; i <= 6; i++) {
        var elementsToToggle = nextElem.querySelectorAll('div.depth-' + i);

        elementsToToggle.forEach(x => {
          // only allow elements hidden by a specific parent to be shown again when that parent is clicked
          if (!shouldHide && x.classList.contains('hidden-by-' + parentId)) {
            x.classList.remove('hidden');
            x.classList.remove('hidden-by-' + parentId);
          }
          else
          {
            if (!x.classList.contains('hidden')) {
              x.classList.add('hidden');
              x.classList.add('hidden-by-' + parentId);
            }
              
            // update count if list contains an element with comment-content-depth-x
            if (x.classList.contains('comment-content-depth-' + i)) {
              numOfChildrenHidden++;
            }
          }
        });
      }

      nextElem = nextElem.nextElementSibling;
    }
    return numOfChildrenHidden;
  }
}
