import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-encabezado-principal-seccion',
  templateUrl: './encabezado-principal-seccion.component.html',
  styleUrls: ['./encabezado-principal-seccion.component.css']
})
export class EncabezadoPrincipalSeccionComponent {
constructor() { }

  ngOnInit(): void {
    const navExpander = document.getElementById('nav-expander');
    if (navExpander) {
      navExpander.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('nav-expanded');
      });
    }
    const navClose = document.getElementById('nav-close');
    if (navClose) {
      navClose.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('nav-expanded');
      });
    }
  }
}
