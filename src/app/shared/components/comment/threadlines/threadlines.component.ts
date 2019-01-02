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

  onClick(id : string, depth : string) {
    // TODO: add state check to see if thread is currently hidden then remove class

    var parentElement = document.getElementById(id);
    parentElement.classList.add('hidden');

    var parentClass = parentElement.classList[0]; // find comment-depth-x class
    var nextElem = parentElement.nextElementSibling;
    var count = 0;

    // while (next sibling does not contain same comment-depth-x as parent)
    while (nextElem != null && !nextElem.classList.contains(parentClass) && count < 100)
    {
      console.log(nextElem);
      // TODO: Add for loop to just add "depth-x" when it starts at parent depth and ends at.. 6?
      // TODO: Should I just have a single separate class for "depth-x" so i don't have to maintain all of these?

      // query next siblbing for "comment-thread-depth-x" with a depth >= parent element depth
      // add "hidden" to all elements
      var threadElems = nextElem.querySelectorAll('div.comment-thread-depth-1');
      threadElems.forEach(x => x.classList.add('hidden'));

      var threadElems2 = nextElem.querySelectorAll('div.comment-thread-depth-2');
      threadElems2.forEach(x => x.classList.add('hidden'));

      // query next sibling for "comment-content-depth-x" with a depth >= parent element depth
      // add "hidden" to all elements
      var commentContentElems = nextElem.querySelectorAll('div.comment-content-depth-1');
      commentContentElems.forEach(x => x.classList.add('hidden'));

      var commentContentElems2 = nextElem.querySelectorAll('div.comment-content-depth-2');
      commentContentElems2.forEach(x => x.classList.add('hidden'));

      // query next sibling for "comment-more-replies-depth-x" with a depth >= parent element depth
      // add "hidden" to all elements
      var commentMoreRepliesElems = nextElem.querySelectorAll('div.comment-more-replies-depth-1');
      console.log(commentMoreRepliesElems);
      commentMoreRepliesElems.forEach(x => x.classList.add('hidden'));

      var commentMoreRepliesElems2 = nextElem.querySelectorAll('div.comment-more-replies-depth-2');
      commentMoreRepliesElems2.forEach(x => x.classList.add('hidden'));

      nextElem = nextElem.nextElementSibling
      count++;
    }
    console.log(parentClass);
    console.log(count);
  }
}
