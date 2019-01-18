import { Component, OnInit } from '@angular/core';
import { MainPost } from 'src/app/models/mainPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: MainPost[] = new Array<MainPost>();

  constructor() {
  }
  
  ngOnInit(): void {
    this.posts.push(new MainPost());
    this.posts.push(new MainPost());
  }
}
