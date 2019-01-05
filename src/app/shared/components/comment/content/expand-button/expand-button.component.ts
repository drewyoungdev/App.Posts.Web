import { Component, OnInit, Input } from '@angular/core';
import { ThreadClickService } from 'src/app/shared/services/thread-click.service';
import { ThreadClick } from 'src/app/models/threadClick';

@Component({
  selector: 'comment-expand-button',
  templateUrl: './expand-button.component.html',
  styleUrls: ['./expand-button.component.scss']
})
export class ExpandButtonComponent implements OnInit {
  
  @Input()
  currentId : string;

  @Input()
  depth : number;

  constructor(private threadClickService : ThreadClickService) { }

  ngOnInit() {
  }

  onClick(id : string, depth : number) {
    var threadClick = new ThreadClick();
    threadClick.shouldHide = false;
    threadClick.id = id;
    threadClick.depth = depth;
    
    this.threadClickService.Stream.emit(threadClick);
  }

}
