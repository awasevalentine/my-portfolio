import { CareerJobDescriptionService } from './Services/career-job-description.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { CareerComponent } from './Pages/career/career.component';
import { DefaultLayoutComponent } from './Pages/default-layout/default-layout.component';
import { ContactMeComponent } from './Pages/contact-me/contact-me.component';
import { AboutComponent } from './Pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    CareerComponent,
    DefaultLayoutComponent,
    ContactMeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [CareerJobDescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
