import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() achorName: any
  constructor() { }

  ngOnInit(): void {
  }


  // scrollToElement(element: any): void {
  //   element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  // }


}
