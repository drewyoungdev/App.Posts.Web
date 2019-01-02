import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Post;

  @Input()
  parentIds: number[];

  isCommentHidden: boolean;
  
  constructor() { }

  ngOnInit() {
  }
  
  extendParentIds() {
    var newArray = [];

    for(var i = 0, len = this.parentIds.length; i < len; ++i)
    {
      newArray[i] = this.parentIds[i];
    }

    newArray.push(this.comment.id);

    return newArray;
  }
}
