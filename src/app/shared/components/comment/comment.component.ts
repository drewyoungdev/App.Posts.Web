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

  repliesLoaded() {
    this.isRepliesLoaded = !this.isRepliesLoaded;
  }
}
