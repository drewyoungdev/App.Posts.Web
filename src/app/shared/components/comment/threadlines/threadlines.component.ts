import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {
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
    // TODO: add state check to see if thread is currently hidden then remove class
    //this.isCommentHidden = true;

    var parentElement = document.getElementById(id);
    parentElement.classList.add('hidden');

    var nextElem = parentElement.nextElementSibling;

    // while next sibling does not contain same comment-depth-x as parent (all elements under parent in same depth)
    // hide all elements with the same or greater depth
    while (nextElem != null && !nextElem.classList.contains('comment-depth-' + depth))
    {
      for (var i = depth; i <= 6; i++)
      {
        var elementsToHide = nextElem.querySelectorAll('div.depth-' + i);
        elementsToHide.forEach(x => x.classList.add('hidden'));
      }

      nextElem = nextElem.nextElementSibling
    }
  }
}
