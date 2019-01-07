import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private postsApiBaseUrl = environment.postsApiBaseUrl;
  private maxDepth = environment.maxDepth;

  constructor(private httpClient: HttpClient) { }

  getComment(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.postsApiBaseUrl}/${id}`);
  }

  getReplies(parentId: string, sortType: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.postsApiBaseUrl}/${parentId}/replies/${sortType}?maxDepth=${this.maxDepth}`);
  }
}
