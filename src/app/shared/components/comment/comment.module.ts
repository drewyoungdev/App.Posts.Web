import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { NgSelectModule } from '@ng-select/ng-select';

import { CommentComponent } from './comment.component';
import { ThreadlinesComponent } from './threadlines/threadlines.component';
import { ContentComponent } from './content/content.component';
import { NumberSuffixPipe } from '../../pipes/number-suffix.pipe';
import { ReplyBoxComponent } from '../reply-box/reply-box.component';
import { SortDropdownComponent } from '../dropdowns/sort-dropdown/sort-dropdown.component';
import { CommentSkeletonScreenComponent } from './comment-skeleton-screen/comment-skeleton-screen.component';

@NgModule({
    declarations: [
        CommentComponent,
        ThreadlinesComponent,
        ContentComponent,
        NumberSuffixPipe,
        ReplyBoxComponent,
        SortDropdownComponent,
        CommentSkeletonScreenComponent
    ],
    imports: [
        CommonModule,
        MomentModule,
        NgSelectModule,
        FormsModule
    ],
    exports: [
        CommentComponent,
        CommentSkeletonScreenComponent,
        // have an overall SharedModule to contain these components
        ReplyBoxComponent,
        SortDropdownComponent
    ]
  })
  export class CommentModule { }
