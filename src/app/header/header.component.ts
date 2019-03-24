import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  eventnumber = 0;
  constructor() { }

  ngOnInit() {
  }
  count(){
// tslint:disable-next-line: no-unused-expression
    this.eventnumber++ ;
  }
  func() {
    return this.eventnumber > 5 ? true : false ;
  }
}
