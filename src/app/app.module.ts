import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




