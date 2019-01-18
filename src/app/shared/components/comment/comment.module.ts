import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { NgSelectModule } from '@ng-select/ng-select';

import { CommentComponent } from './comment.component';
import { ThreadlinesComponent } from './threadlines/threadlines.component';
import { ContentComponent } from './content/content.component';
import { BodyComponent } from './content/body/body.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';
import { MoreRepliesComponent } from './more-replies/more-replies.component';
import { ExpandButtonComponent } from './content/expand-button/expand-button.component';
import { VoteButtonsComponent } from './content/vote-buttons/vote-buttons.component';
import { NumberSuffixPipe } from '../../pipes/number-suffix.pipe';
import { ReplyBoxComponent } from '../reply-box/reply-box.component';
import { SortDropdownComponent } from '../dropdowns/sort-dropdown/sort-dropdown.component';
import { CommentSkeletonScreenComponent } from './comment-skeleton-screen/comment-skeleton-screen.component';

@NgModule({
    declarations: [
        CommentComponent,
        ThreadlinesComponent,
        ContentComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        MoreRepliesComponent,
        ExpandButtonComponent,
        VoteButtonsComponent,
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
