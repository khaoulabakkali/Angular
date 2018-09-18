import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import Post from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup

  constructor(private formBuilder:FormBuilder,
              private postService:PostService,
            private router:Router) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title : ['',Validators.required],
      content : ['',Validators.required]
    })
  }

  onSubmit(){
    const formValue = this.postForm.value
    const title = formValue["title"]
    const content = formValue["content"]
    const post = new Post(title,content) 
    this.postService.addPost(post)
    this.router.navigate(['/'])
  }

}
