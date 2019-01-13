import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reply-box',
  templateUrl: './reply-box.component.html',
  styleUrls: ['./reply-box.component.scss']
})
export class ReplyBoxComponent implements OnInit {

  @Input()
  canCancel : boolean;

  @Output()
  replyCancelledEvent = new EventEmitter();

  @Output()
  replySubmittedEvent = new EventEmitter();

  replyText : string;
  isTextAreaEmpty : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  textAreaEmpty() {
    if (this.replyText != '') {
      this.isTextAreaEmpty = false;
    }

    if (this.replyText == '') {
      this.isTextAreaEmpty = true;
    }
  }

  cancelOnClick() {
    this.replyCancelledEvent.emit();
  }

  replyOnClick() {
    this.replySubmittedEvent.emit();
  }
}
