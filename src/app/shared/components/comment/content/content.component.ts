import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ThreadClickService } from 'src/app/shared/components/comment/threadlines/services/thread-click.service';
import { ThreadClick } from 'src/app/models/threadClick';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'comment-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  @Input()
  comment : Post;

  collapsed : boolean = false;
  numOfChildrenHidden : number;
  showReply : boolean = false;

  maxDepth : number = environment.maxDepth;
  
  constructor(private threadClickService : ThreadClickService) { }

  ngOnInit() {
    this.threadClickService.Stream.subscribe(threadClick => {
      return this.processThreadClick(threadClick);
    });
  }

  emitThreadClick() {
    var threadClick = new ThreadClick();
    threadClick.shouldHide = false;
    threadClick.id = this.comment.id;
    threadClick.depth = this.comment.depth;
    
    this.threadClickService.Stream.emit(threadClick);
  }

  replyClicked() {
    this.showReply = !this.showReply;
  }
  
  replyCancelled() {
    // show reply is false if event returns true (meaning reply was cancelled)
    this.showReply = !this.showReply;
  }
  
  replySubmitted() {
    // show reply is false if event returns true (meaning reply was submitted)
    this.showReply = !this.showReply;

    // Simulate server returning new Post record
    var newComment = new Post();
    newComment.parentId = this.comment.id;
    newComment.depth = this.comment.depth + 1;
    newComment.id = Math.random().toString();
    newComment.body = 'Test Comment';

    // TODO: fix server side endpoint to accept MaxDepth query param so FE can set it
    // TODO: fix db and midware to not pick up that additional one-level of replies and stop at MaxDepth + 1
    if (newComment.depth == environment.maxDepth) {      
      // if post coming back is maxDepth, then force user to enter new thread to view post
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
      // hide/show all elements with the same or greater depth (limited by maxDepth)
      for (var i = depth; i <= environment.maxDepth; i++) {
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
