import { Component, OnInit, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss']
})
export class MainPostComponent implements OnInit {
  @Input()
  comment : Post;

  @ViewChild('mainPost') 
  elementView: ElementRef;

  mainPostHeight: number;
  isStickied: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainPostHeight = this.elementView.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var mainPostHeight = this.mainPostHeight;
    if (window.pageYOffset > mainPostHeight) {
      this.isStickied = true;
    } else {
      this.isStickied = false;
    }
  }
}
