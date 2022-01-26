import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerJobDescriptionService {

  constructor() { }


  getHuaweiTechCareerJobDescription() {
   const huaweiTechnologies = [
      ` Effectively collaborate with a team of developers in Implementing different
        software solutions for Huawei Technologies. Such as, GIS Map, Heat Map solutions,
        and a whole lot of other dashboards that is being used by NG MTN, NG Airtel, NG
        Glo, 9mobile and other mobile networks across Africa.
      `,

      `
      Collaborates with the software design team to solve application faults
      and discuss verification protocols, identifies software application weaknesses and
      target areas, and sketches out ideas for automated test procedures.
      `,

      `Successfully oversee the planning, designing and implementations of new
       requirements to completion phase. And also coordinates with product
       management, software, and support engineers to deliver stable enterprise
       software products.
      `,
    ]

    return huaweiTechnologies
  }

  getJobDescriptionPayQart() {
    const payQart = [
      `
      Effectively collaborated with a team of developers on the continuous maintenance
      and adding of new codes to  the existing code-base.
      `,

      `
      Responsible for building APIs for Payqart version 2, that handles all merchants
      dashboard on PayQart platform.
      `,

      `
      collaborated with a team of developers in the design and initialization of PayQart
      version 2 website and mobile app.
      `
    ]

    return payQart
  }


  getJobDescriptionSpringICT() {
    const springICT = [
      `
      Successfully collaborated with a team of developers on the design, and implementation of  an
      inventory management system
      `,

      `
      Designed appealing user interfaces for applications
      `
    ]

    return springICT
  }
}
