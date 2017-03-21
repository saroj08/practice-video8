import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarformComponent } from './bookmarform/bookmarform.component';
import {GetService} from "./services.service";
import {Routes,RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    BookmarformComponent,
   
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,ReactiveFormsModule,
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
