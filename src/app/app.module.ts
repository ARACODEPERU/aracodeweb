import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BannerComponent } from './Components/banner/banner.component';
import { BlogHomeSectionComponent } from './Components/blog-home-section/blog-home-section.component';
import { ContactoVideoSeccionComponent } from './Components/contacto-video-seccion/contacto-video-seccion.component';
import { ContactoChicoSeccionComponent } from './Components/contacto-chico-seccion/contacto-chico-seccion.component';
import { ContactoGrandeSeccionComponent } from './Components/contacto-grande-seccion/contacto-grande-seccion.component';
import { EncabezadoSecundarioSeccionComponent } from './Components/encabezado-secundario-seccion/encabezado-secundario-seccion.component';
import { EncabezadoPrincipalSeccionComponent } from './Components/encabezado-principal-seccion/encabezado-principal-seccion.component';
import { PiePaginaSeccionComponent } from './Components/pie-pagina-seccion/pie-pagina-seccion.component';
import { ProyectosSeccionComponent } from './Components/proyectos-seccion/proyectos-seccion.component';
import { SobreNosotrosSeccionComponent } from './Components/sobre-nosotros-seccion/sobre-nosotros-seccion.component';
import { ServiciosSeccionComponent } from './Components/servicios-seccion/servicios-seccion.component';
import { ElegirnosSeccionComponent } from './Components/elegirnos-seccion/elegirnos-seccion.component';
import { TestimoniosSeccionComponent } from './Components/testimonios-seccion/testimonios-seccion.component';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';

import { InicioComponent } from './Paginas/inicio/inicio.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { BlogEsComponent } from './Paginas/blog-es/blog-es.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';
import { ServiciosComponent } from './Paginas/servicios/servicios.component';
import { PaginasWebComponent } from './Paginas/paginas-web/paginas-web.component';
import { ClientesSeccionComponent } from './Components/clientes-seccion/clientes-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    BlogHomeSectionComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    BlogEsComponent,
    ContactoComponent,
    ContactoVideoSeccionComponent,
    ContactoChicoSeccionComponent,
    ContactoGrandeSeccionComponent,
    EncabezadoSecundarioSeccionComponent,
    EncabezadoPrincipalSeccionComponent,
    PiePaginaSeccionComponent,
    ProyectosComponent,
    ProyectosSeccionComponent,
    ServiciosComponent,
    PaginasWebComponent,
    SobreNosotrosSeccionComponent,
    ServiciosSeccionComponent,
    ElegirnosSeccionComponent,
    TestimoniosSeccionComponent,
    ClientesSeccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Agrega el módulo de enrutamiento a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
