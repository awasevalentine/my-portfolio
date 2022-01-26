import { CareerJobDescriptionService } from './../../Services/career-job-description.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
// import AOS from 'aos'


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CareerComponent implements OnInit {

  public huaweiTechnologies: any = [];
  public payQart: any = []
  public springICT: any = []




  constructor(private _careerService: CareerJobDescriptionService) {
  }

  ngOnInit(): void {
    this.huaweiTechnologies.push(this._careerService.getHuaweiTechCareerJobDescription())
    this.payQart.push(this._careerService.getJobDescriptionPayQart())
    this.springICT.push(this._careerService.getJobDescriptionSpringICT())
  }

}
