import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPostComponent } from './main-post.component';
import { MainPostSkeletonScreenComponent } from './main-post-skeleton-screen/main-post-skeleton-screen.component';

@NgModule({
    declarations: [
        MainPostComponent,
        MainPostSkeletonScreenComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainPostComponent,
        MainPostSkeletonScreenComponent
    ]
  })
  export class MainPostModule { }
