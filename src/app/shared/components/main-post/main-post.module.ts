import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPostComponent } from './main-post.component';
import { MainPostHeaderComponent } from './main-post-header/main-post-header.component';
import { MainPostFooterComponent } from './main-post-footer/main-post-footer.component';
import { MainPostSkeletonScreenComponent } from './main-post-skeleton-screen/main-post-skeleton-screen.component';

@NgModule({
    declarations: [
        MainPostComponent,
        MainPostHeaderComponent,
        MainPostFooterComponent,
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
