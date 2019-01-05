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
  parentIds: string[];
  
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
