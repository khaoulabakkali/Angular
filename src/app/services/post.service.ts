import { Injectable } from '@angular/core';
import Post from '../Post'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts:Post[] = []

  postSubject = new Subject<Post[]>();

    emitPosts() {
    this.postSubject.next(this.posts)
  }

  addPost(post) {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(post){
      var index = this.posts.indexOf(post);
      this.posts.splice(index);
      this.emitPosts();
  }


loveIt(post){
    post.loveIts++;
  }

  dontLoveIt(post){
    post.loveIts--; 
  }



  constructor() { }
}
