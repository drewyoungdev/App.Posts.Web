import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

// TODO: Create CommentsModule and MainPostModule
import { CommentComponent } from 'src/app/shared/components/comment/comment.component';
import { ThreadlinesComponent } from 'src/app/shared/components/comment/threadlines/threadlines.component';
import { ContentComponent } from 'src/app/shared/components/comment/content/content.component';
import { HeaderComponent } from 'src/app/shared/components/comment/content/header/header.component';
import { BodyComponent } from 'src/app/shared/components/comment/content/body/body.component';
import { FooterComponent } from 'src/app/shared/components/comment/content/footer/footer.component';
import { MoreRepliesComponent } from 'src/app/shared/components/comment/more-replies/more-replies.component';
import { ExpandButtonComponent } from 'src/app/shared/components/comment/content/expand-button/expand-button.component';
import { VoteButtonsComponent } from 'src/app/shared/components/comment/content/vote-buttons/vote-buttons.component';
import { NumberSuffixPipe } from 'src/app/shared/pipes/number-suffix.pipe';
import { ReplyBoxComponent } from 'src/app/shared/components/reply-box/reply-box.component';
import { MainPostComponent } from 'src/app/shared/components/main-post/main-post.component';
import { MainPostHeaderComponent } from 'src/app/shared/components/main-post/main-post-header/main-post-header.component';
import { SortDropdownComponent } from 'src/app/shared/components/dropdowns/sort-dropdown/sort-dropdown.component';
import { MomentModule } from 'angular2-moment';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
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
    MainPostComponent,
    MainPostHeaderComponent,
    SortDropdownComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MomentModule,
    NgSelectModule,
    FormsModule
  ]
})
export class HomeModule { }
