import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPostComponent } from './main-post.component';
import { MainPostHeaderComponent } from './main-post-header/main-post-header.component';
import { MainPostFooterComponent } from './main-post-footer/main-post-footer.component';

@NgModule({
    declarations: [
        MainPostComponent,
        MainPostHeaderComponent,
        MainPostFooterComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainPostComponent
    ]
  })
  export class MainPostModule { }
