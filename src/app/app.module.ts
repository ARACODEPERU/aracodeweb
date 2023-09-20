import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { BannerComponent } from './Components/banner/banner.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ServicesSectionComponent } from './Components/services-section/services-section.component';
import { WhyChooseSectionComponent } from './Components/why-choose-section/why-choose-section.component';
import { BlogHomeSectionComponent } from './Components/blog-home-section/blog-home-section.component';
import { TestimonialSectionComponent } from './Components/testimonial-section/testimonial-section.component';
import { ClientsSectionComponent } from './Components/clients-section/clients-section.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { BlogEsComponent } from './Paginas/blog-es/blog-es.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';
import { AboutSectionTwoComponent } from './Components/about-section-two/about-section-two.component';
import { ContactoVideoSeccionComponent } from './Components/contacto-video-seccion/contacto-video-seccion.component';
import { ContactoChicoSeccionComponent } from './Components/contacto-chico-seccion/contacto-chico-seccion.component';
import { ContactoGrandeSeccionComponent } from './Components/contacto-grande-seccion/contacto-grande-seccion.component';
import { EncabezadoSecundarioSeccionComponent } from './Components/encabezado-secundario-seccion/encabezado-secundario-seccion.component';
import { EncabezadoPrincipalSeccionComponent } from './Components/encabezado-principal-seccion/encabezado-principal-seccion.component';
import { PiePaginaSeccionComponent } from './Components/pie-pagina-seccion/pie-pagina-seccion.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';
import { ProyectosSeccionComponent } from './Components/proyectos-seccion/proyectos-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    WhyChooseSectionComponent,
    BlogHomeSectionComponent,
    TestimonialSectionComponent,
    ClientsSectionComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    BlogEsComponent,
    ContactoComponent,
    AboutSectionTwoComponent,
    ContactoVideoSeccionComponent,
    ContactoChicoSeccionComponent,
    ContactoGrandeSeccionComponent,
    EncabezadoSecundarioSeccionComponent,
    EncabezadoPrincipalSeccionComponent,
    PiePaginaSeccionComponent,
    ProyectosComponent,
    ProyectosSeccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Agrega el módulo de enrutamiento a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
