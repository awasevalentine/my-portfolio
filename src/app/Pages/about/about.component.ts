import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public technologiesUsed = ['JavaScript', 'Angular', 'HTML/CSS', 'NodeJs', 'NestJs',
                             'Express JS', 'MYSQL', 'MongoDb', 'TypeScript',
                             'Bootstrap', 'Angular Material', 'Python',
                            ]
  constructor() { }

  ngOnInit(): void {
  }

}
