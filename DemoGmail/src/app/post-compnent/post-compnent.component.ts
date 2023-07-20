import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-compnent',
  templateUrl: './post-compnent.component.html',
  styleUrls: ['./post-compnent.component.css']
})
export class PostCompnentComponent implements OnInit {
  title:string = "Lists of Posts";
  messagePost : string = 'Meessage Post';
  @Input() fromParent:string | undefined;
  constructor(){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
