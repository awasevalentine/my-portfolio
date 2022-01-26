import { ContactMeComponent } from './Pages/contact-me/contact-me.component';
import { CareerComponent } from './Pages/career/career.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { DefaultLayoutComponent } from './Pages/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent
  },
  {
    path: 'my-portfolio', component: PortfolioComponent
  },
  {
    path: 'my-career', component: CareerComponent
  },
  {
    path: 'contact-me', component: ContactMeComponent
  },
  {
    path: 'about-me', component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 70]}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
