import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  isReplyClicked : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
