import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { ThreadlinesComponent } from './shared/components/comment/threadlines/threadlines.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ThreadlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
