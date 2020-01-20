import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addPost(title: string, content: string, password: string): Observable<any> {
    const post: Post = {title: title, content: content, password: password};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id:String, title: string, content: string,password: string): Observable<any> {
    const post: Post = {title: title, content: content,password: password};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}