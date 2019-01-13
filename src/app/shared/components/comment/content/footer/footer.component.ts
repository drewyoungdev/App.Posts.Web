import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'comment-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  depth : number;

  @Output()
  replyClickedEvent = new EventEmitter();

  maxDepth : number = environment.maxDepth;

  showReply : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  replyOnClick() {
    this.showReply = !this.showReply;
    this.replyClickedEvent.emit();
  }
}
