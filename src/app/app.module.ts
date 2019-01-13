import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Refactor into separate CommentsModule then into SharedModule
import { CommentComponent } from './shared/components/comment/comment.component';
import { ThreadlinesComponent } from './shared/components/comment/threadlines/threadlines.component';
import { ContentComponent } from './shared/components/comment/content/content.component';
import { HeaderComponent } from './shared/components/comment/content/header/header.component';
import { BodyComponent } from './shared/components/comment/content/body/body.component';
import { FooterComponent } from './shared/components/comment/content/footer/footer.component';
import { MoreRepliesComponent } from './shared/components/comment/more-replies/more-replies.component';
import { ExpandButtonComponent } from './shared/components/comment/content/expand-button/expand-button.component';
import { VoteButtonsComponent } from './shared/components/comment/content/vote-buttons/vote-buttons.component';

// Refactor into SharedModule
import { MomentModule } from 'angular2-moment';
import { NumberSuffixPipe } from './shared/pipes/number-suffix.pipe';
import { ReplyBoxComponent } from './shared/components/reply-box/reply-box.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainPostComponent } from './shared/components/main-post/main-post.component';
import { MainPostHeaderComponent } from './shared/components/main-post/main-post-header/main-post-header.component';

@NgModule({
  declarations: [
    AppComponent,
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
    MainPostHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
