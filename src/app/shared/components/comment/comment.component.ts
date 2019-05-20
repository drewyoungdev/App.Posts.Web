import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';

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

  maxDepth : number = environment.maxDepth;
  isRepliesLoaded: boolean = false;
  showRepliesLoadingMessage: boolean = false;
  
  constructor() { }

  ngOnInit() {
    var newArray = [];

    for(var i = 0, len = this.previousParentIds.length; i < len; ++i)
    {
      newArray[i] = this.previousParentIds[i];
    }

    newArray.push(this.comment.id);

    this.parentIds = newArray;
  }

  moreRepliesOnClick() {
    // toggle loading message
    this.showRepliesLoadingMessage = true;
    
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
    this.showRepliesLoadingMessage = false;
    this.isRepliesLoaded = !this.isRepliesLoaded;
    this.comment.replies.push.apply(this.comment.replies, newComments);
  }
}
