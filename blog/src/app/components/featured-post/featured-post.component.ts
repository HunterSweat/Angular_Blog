import { Component, OnInit, Input } from '@angular/core';
import {BlogPost} from '../../Post';
import { Subscription, Subject } from 'rxjs';
import { DiscriptionUiService } from 'src/app/services/discription-ui.service';


@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  @Input() post!: BlogPost;
  @Input() index!: number;
  showDiscription: boolean=false;
  subscription: Subscription;
  private subject = new Subject<any>();
  

  constructor(private discriptionService: DiscriptionUiService) {
    this.subscription = this.discriptionService.onToggle().subscribe((value) => (this.showDiscription = value));
  
   }

  ngOnInit(): void { }

  toggleDiscription(i:any) {
    this.showDiscription = !this.showDiscription;
    this.subject.next(this.showDiscription);
    
  }

}
