import { Component, OnInit, Input } from '@angular/core';
import { ThreadClickService } from 'src/app/shared/services/thread-click.service';
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
  parentIds : number[];
  
  @Input() 
  currentId : number;

  constructor(private threadClickService : ThreadClickService) {
  }

  ngOnInit() {
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
    var parentElement = document.getElementById(id);
    var nextElem = parentElement.nextElementSibling;

    // while next sibling does not contain same comment-depth-x as parent (all elements under parent in same depth)
    var count = 0;
    while (nextElem != null && !nextElem.classList.contains('comment-depth-' + depth))
    {
      // hide all elements with the same or greater depth (max of 6)
      for (var i = depth; i <= 6; i++) {
        var elementsToHide = nextElem.querySelectorAll('div.depth-' + i);

        elementsToHide.forEach(x => {
          x.classList.add('hidden');
          
          // update count if list contains an element with comment-content-depth-x
          if (x.classList.contains('comment-content-depth-' + i)) {
            count++;
          }
        });
      }

      nextElem = nextElem.nextElementSibling;
    }
    
    var threadClick = new ThreadClick();
    threadClick.id = id;
    threadClick.numOfChildren = count;
    
    this.threadClickService.Stream.emit(threadClick);
  }
}
