import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  author : string;

  @Input()
  points : number;

  @Input()
  createDate: string;
  
  @Input()
  isHidden : boolean;

  @Input()
  numOfChildrenHidden : number;
  
  constructor() { }

  ngOnInit() {
  }

}
