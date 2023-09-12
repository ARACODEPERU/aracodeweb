import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FullWidthHeaderComponent } from './Components/full-width-header/full-width-header.component';
import { BannerComponent } from './Components/banner/banner.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ServicesSectionComponent } from './Components/services-section/services-section.component';
import { WhyChooseSectionComponent } from './Components/why-choose-section/why-choose-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    FullWidthHeaderComponent,
    BannerComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    WhyChooseSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
