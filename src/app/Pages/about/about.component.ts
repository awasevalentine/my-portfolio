import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public technologiesUsed = ['JavaScript', 'Angular','React', 'Redux', 'HTML/CSS', 'NodeJs', 'NestJs',
                             'Express JS', 'MYSQL', 'MongoDb', 'TypeScript',
                             'Bootstrap', 'Angular Material','Chakra UI', 'Python',
                            ]
  constructor() { }

  ngOnInit(): void {
  }

}
