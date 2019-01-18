import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostWithRepliesRoutingModule } from './post-with-replies-routing.module';
import { PostWithRepliesComponent } from './components/post-with-replies/post-with-replies.component';
import { CommentModule } from 'src/app/shared/components/comment/comment.module';
import { MainPostModule } from 'src/app/shared/components/main-post/main-post.module';

@NgModule({
  declarations: [
    PostWithRepliesComponent
  ],
  imports: [
    CommonModule,
    PostWithRepliesRoutingModule,
    MainPostModule,
    CommentModule
  ]
})
export class PostWithRepliesModule { }
