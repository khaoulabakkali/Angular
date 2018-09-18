import { Component, OnInit,Input } from '@angular/core';
import Post from '../Post'
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss']
})
export class AppListItemComponent implements OnInit {
 
 @Input() post:Post

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  love(post){
    this.postService.loveIt(post)
  }

   dontLove(post){
    this.postService.dontLoveIt(post)
  }

  remove(post){
    this.postService.deletePost(post)
  }

}
