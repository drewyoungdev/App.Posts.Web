import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ThreadClickService } from 'src/app/shared/services/thread-click.service';
import { ThreadClick } from 'src/app/models/threadClick';
import { Subscription } from 'rxjs';

@Component({
  selector: 'comment-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  comment : Post;

  isHidden : boolean = false;
  numOfChildrenHidden : number;

  subscription : Subscription;
  
  constructor(private threadClickService : ThreadClickService) { }

  ngOnInit() {
    this.subscription = this.threadClickService.Stream.subscribe(threadClick => {
      return this.processClick(threadClick);
    });
  }

  processClick(threadClick : ThreadClick) {
    if (parseInt(threadClick.id) == this.comment.id) {
      this.isHidden = true;
      this.numOfChildrenHidden = threadClick.numOfChildren;
    }
  }

}
