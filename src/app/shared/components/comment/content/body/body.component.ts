import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input()
  bodyText : string;
  
  constructor() { }

  ngOnInit() {
  }

}
