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

  onClick(id : string) {
    // if comment is hidden then remove

    // find parent element.
    // hide all divs with "comment-thread" with a depth >= parent element depth
    // hide all divs with "comment-content" with a depth >= parent element depth
    // stop loop until you hit another element in the same depth as parent
    var domElement = document.getElementById(id);
    console.log(domElement);
    console.log(domElement.nextElementSibling);
    //domElement.classList.add('hidden');

    // while (element is not another element in the same depth)
    // keep hiding siblings 
  }
}
