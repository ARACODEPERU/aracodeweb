import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';
import { BlogEsComponent } from './Paginas/blog-es/blog-es.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'blog-es', component: BlogEsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
