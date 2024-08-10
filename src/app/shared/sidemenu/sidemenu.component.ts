import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {

  public menuItems = routes
  // ?? sino viene
  .map( route => route.children ?? [] )
  // el flat se asegura que no tendra internamente ese arreglo
  .flat()
  // la condicion es : si la ruta existe y la ruta tiene el path entonces eso es lo que quiero mostrar
  .filter( route => route && route.path )
  // si el path incluye dos puntos lo vamos a excluir. El signo de ! significa negacion.
  .filter( route => !route.path?.includes(':') );

  // console.log(dashboardRoutes)

  constructor() {

    // const dashboardRoutes = routes
    // // ?? sino viene
    // .map( route => route.children ?? [] )
    // // el flat se asegura que no tendra internamente ese arreglo
    // .flat()
    // // la condicion es : si la ruta existe y la ruta tiene el path entonces eso es lo que quiero mostrar
    // .filter( route => route && route.path )
    // // si el path incluye dos puntos lo vamos a excluir. El signo de ! significa negacion.
    // .filter( route => !route.path?.includes(':') )

    // console.log(dashboardRoutes)
  }

}
