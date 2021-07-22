import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { BlogPost } from 'src/app/Post';
import { DiscriptionUiService } from 'src/app/services/discription-ui.service';

@Component({
  selector: 'app-other-posts',
  templateUrl: './other-posts.component.html',
  styleUrls: ['./other-posts.component.css']
})
export class OtherPostsComponent implements OnInit {
  @Input() post! : BlogPost
  @Input() index! : number;
  showDiscription : boolean = false;
  subscription : Subscription;
  private subject = new Subject<any>();

  constructor(private discritpionService: DiscriptionUiService) {
    this.subscription = this.discritpionService.onToggle().subscribe((value) => (this.showDiscription = value));
   }

  ngOnInit(): void {
  }

  toggleDiscription(i: any){
    this.showDiscription = !this.showDiscription;
    this.subject.next(this.showDiscription);
   
    
  }

}
