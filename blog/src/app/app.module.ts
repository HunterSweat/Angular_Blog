import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { OtherPostsComponent } from './components/other-posts/other-posts.component';
import { SideWidgetsComponent } from './components/side-widgets/side-widgets.component';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { DiscriptionBtnComponent } from './components/discription-btn/discription-btn.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    FeaturedPostComponent,
    OtherPostsComponent,
    SideWidgetsComponent,
    MyFilterPipePipe,
    FooterComponent,
    DiscriptionBtnComponent,
    BlogPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
