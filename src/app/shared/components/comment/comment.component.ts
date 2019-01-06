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

  repliesLoaded($event) {
    this.isRepliesLoaded = $event;
  }
}
