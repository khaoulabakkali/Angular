import { Component, OnInit, Input } from '@angular/core';
import Post from '../Post'

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  @Input() posts :Post[]

  constructor() { }

  ngOnInit() {
  }

}


