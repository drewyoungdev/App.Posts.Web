import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'more-replies',
  templateUrl: './more-replies.component.html',
  styleUrls: ['./more-replies.component.scss']
})
export class MoreRepliesComponent implements OnInit {

  @Input()
  comment : Post;

  @Output()
  repliesLoadedEvent = new EventEmitter();
  
  showLoadingMessage : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  moreRepliesOnClick() {
    // toggle loading message
    this.showLoadingMessage = true;
    
    // Simulate server returning new Post record
    var newComments = new Array<Post>();
    var newComment = new Post();
    newComment.parentId = this.comment.id;
    newComment.depth = this.comment.depth + 1;
    newComment.id = Math.random().toString();
    newComment.body = 'Test Comment';
    newComments.push(newComment);
    var newComment2 = new Post();
    newComment2.parentId = this.comment.id;
    newComment2.depth = this.comment.depth + 1;
    newComment2.id = Math.random().toString();
    newComment2.body = 'Test Comment';
    newComments.push(newComment2);

    // toggle loading off and add new comments to array
    this.showLoadingMessage = false;
    this.comment.replies.push.apply(this.comment.replies, newComments);

    // tell parent to destroy component when done
    this.repliesLoadedEvent.emit();
  }
}
