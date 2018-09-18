import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';

import { NewPostComponent } from './new-post/new-post.component';
import {Routes,RouterModule} from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


const appRoutes:Routes = [
  {path:'',component:AppListComponent},
  {path:'new',component:NewPostComponent},
  {path:'404',component:AppListComponent},
  {path:'**',redirectTo:'404'}
]

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   PostService,
   ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }










