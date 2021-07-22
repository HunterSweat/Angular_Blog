import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogPost } from '../Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


const apiUrl = 'http://192.168.1.221/php-rest-api/read.php';

@Injectable({
  providedIn: 'root'
})

export class BlogPostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<BlogPost[]>{ 
    return this.http.get<BlogPost[]>(apiUrl); 
  }
}


