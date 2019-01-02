import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { ThreadlinesComponent } from './shared/components/comment/threadlines/threadlines.component';
import { ContentComponent } from './shared/components/comment/content/content.component';
import { VotesComponent } from './shared/components/comment/content/votes/votes.component';
import { HeaderComponent } from './shared/components/comment/content/header/header.component';
import { BodyComponent } from './shared/components/comment/content/body/body.component';
import { FooterComponent } from './shared/components/comment/content/footer/footer.component';
import { MoreRepliesComponent } from './shared/components/comment/more-replies/more-replies.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ThreadlinesComponent,
    ContentComponent,
    VotesComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MoreRepliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
