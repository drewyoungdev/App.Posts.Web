import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostWithRepliesComponent } from './components/post-with-replies/post-with-replies.component';

const routes: Routes = [
  {
    path: ':id',
    component: PostWithRepliesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostWithRepliesRoutingModule { }
