import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Post;

  @Input()
  previousParentIds: string[];

  @Input()
  parentIds: string[];
  
  showReply : boolean = false;
  
  constructor() { }

  ngOnInit() {
    console.log('new comment');
    var newArray = [];

    for(var i = 0, len = this.previousParentIds.length; i < len; ++i)
    {
      newArray[i] = this.previousParentIds[i];
    }

    newArray.push(this.comment.id);

    this.parentIds = newArray;
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
    var newPost = new Post();
    newPost.parentId = this.comment.id;
    newPost.depth = this.comment.depth + 1;
    newPost.id = Math.random().toString();
    newPost.body = 'Test Comment';

    console.log(this.parentIds);
    console.log(newPost);
    
    if (newPost.depth  == 6) {      
      // How to handle if Post coming back is MaxDepth - 1, then force them to enter new thread
      newPost.mustContinueInNewThread = true;
    }
    
    this.comment.replies.push(newPost)
  }
}
