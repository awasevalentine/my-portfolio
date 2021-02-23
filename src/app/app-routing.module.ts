import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { DefaultLayerComponent } from './pages/components/default-layer/default-layer.component';
import { HomeComponent } from './pages/components/home/home.component';
import { PortfolioComponent } from './pages/components/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayerComponent,
    children: [

      {
        path: '', component: HomeComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'contact', component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
