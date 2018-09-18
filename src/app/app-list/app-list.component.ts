import { Component, OnInit,OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/Post';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit,OnDestroy {
 

  posts:Post[]

  postSubscription : Subscription

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe((posts:Post[])=>{
      this.posts = posts
    })
    this.postService.emitPosts()
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe()
  }

 

}
