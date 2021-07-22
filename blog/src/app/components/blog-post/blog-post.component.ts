import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    fetch('/home/sabadoosh/blog/blog-post/The-Begining.txt')
    .then(response => response.text())
    .then(data=>{
      console.log(data);
    })
  }

 

}
