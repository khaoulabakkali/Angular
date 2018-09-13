import { Component, OnInit ,Input} from '@angular/core';
import Post from '../Post'

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss']
})
export class AppListItemComponent implements OnInit {

 @Input() post:Post 

  constructor() { }

  ngOnInit() {
  }

  love(post){
  	post.loveIts++
  }

   dontLove(post){
  	post.loveIts--
  }
}
