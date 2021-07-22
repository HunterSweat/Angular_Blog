import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-discription-btn',
  templateUrl: './discription-btn.component.html',
  styleUrls: ['./discription-btn.component.css']
})
export class DiscriptionBtnComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Input() index!: number
  
  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit(this.index);
    
  }

}
