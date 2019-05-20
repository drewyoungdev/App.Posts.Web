import { Component, OnInit, Input } from '@angular/core';
import { ThreadClickService } from 'src/app/shared/components/comment/threadlines/services/thread-click.service';
import { ThreadClick } from 'src/app/models/threadClick';

@Component({
  selector: 'threadlines',
  templateUrl: './threadlines.component.html',
  styleUrls: ['./threadlines.component.scss']
})
export class ThreadlinesComponent implements OnInit {
 
  @Input()
  includeNewThread : boolean = true;

  @Input()
  depth : number;

  @Input() 
  previousParentIds : string[];

  @Input() 
  parentIds : string[];
  
  @Input() 
  currentId : string;

  constructor(private threadClickService : ThreadClickService) {
  }

  ngOnInit() {
    var newArray = [];

    for(var i = 0, len = this.previousParentIds.length; i < len; ++i)
    {
      if (this.previousParentIds[i] != this.currentId)
      {
        newArray[i] = this.previousParentIds[i];
      }
    }

    this.parentIds = newArray;
  }

  mouseEnter(id : string) {
    var domElements = document.getElementsByClassName(id);

    for (var i = 0; i < domElements.length; i++) {
      var threadLine = domElements[i].childNodes[0] as Element;
      threadLine.classList.add('threadline-hovered');
    }
  }

  mouseLeave(id : string) {
    var domElements = document.getElementsByClassName(id);
    for (var i = 0; i < domElements.length; i++) {
      var threadLine = domElements[i].childNodes[0] as Element;
      threadLine.classList.remove('threadline-hovered');
    }
  }

  onClick(id : string, depth : number) {
    var threadClick = new ThreadClick();
    threadClick.shouldHide = true;
    threadClick.id = id;
    threadClick.depth = depth;
    
    this.threadClickService.Stream.emit(threadClick);
  }
}
