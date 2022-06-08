import { Component, OnInit } from '@angular/core';
import {PortfolioData} from './data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {



  public portfolioData = PortfolioData



  show = false;
  constructor() { }

  ngOnInit(): void {
    this.portfolioData.forEach((res)=>{
      // JSON.stringify(res.tech_used) = JSON.stringify(res.tech_used).replace(',', ' ')
    console.log("this is it ", JSON.stringify(res.tech_used).replace(',', ' '))

    })

  }

}
