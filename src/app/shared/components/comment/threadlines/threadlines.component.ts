import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'threadlines',
  templateUrl: './threadlines.component.html',
  styleUrls: ['./threadlines.component.scss']
})
export class ThreadlinesComponent implements OnInit {
  
  @Input()
  includeNewThread: boolean = true;

  @Input() 
  parentIds: Int32Array[];
  
  @Input() 
  currentId : number;

  constructor() {
  }

  ngOnInit() {
  }

}
