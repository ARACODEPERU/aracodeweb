import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FullWidthHeaderComponent } from './Components/full-width-header/full-width-header.component';
import { BannerComponent } from './Components/banner/banner.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ServicesSectionComponent } from './Components/services-section/services-section.component';
import { WhyChooseSectionComponent } from './Components/why-choose-section/why-choose-section.component';
import { ContactFastSectionComponent } from './Components/contact-fast-section/contact-fast-section.component';
import { BlogHomeSectionComponent } from './Components/blog-home-section/blog-home-section.component';
import { TestimonialSectionComponent } from './Components/testimonial-section/testimonial-section.component';
import { ClientsSectionComponent } from './Components/clients-section/clients-section.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { BlogEsComponent } from './Paginas/blog-es/blog-es.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';
import { FullWidthHeaderTwoComponent } from './Components/full-width-header-two/full-width-header-two.component';

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
    ContactFastSectionComponent,
    BlogHomeSectionComponent,
    TestimonialSectionComponent,
    ClientsSectionComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    BlogEsComponent,
    ContactoComponent,
    FullWidthHeaderTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Agrega el módulo de enrutamiento a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
