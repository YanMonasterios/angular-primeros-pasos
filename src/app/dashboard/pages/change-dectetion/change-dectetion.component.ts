import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  // hace que siempre este pendiente de los cambios, el onpush esta pendiente de menos puntos de cambios en la app
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  
  <!-- <app-title tittle=" Change Detection " /> -->
  <app-title [tittle]="currentFramework()" />

  <pre> {{frameworkasSignal() | json}} </pre>
  <pre> {{frameworkasProperty() | json}} </pre>
  
  `,
})
export default class ChangeDectetionComponent {

  // esto me ayudara a decir cual es el framework actual
  public currentFramework = computed(
    () => `Change Detection - ${ this.frameworkasSignal().name }`
  )

  // Las Signals son una forma de crear variables reactivas
  public frameworkasSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  }) 


  public frameworkasProperty = signal({
    name: 'Angular',
    releaseDate: 2016,
  }) 


  constructor() {

    // ejecuta cambios dinamicamente
    setTimeout(() => {

     
      this.frameworkasSignal.update( value => ({
        // los tres puntos significa mostrar el valor actual
        ...value,
        name: 'React'
      }))

      console.log('hecho');
      // chance de 3 segundos 
    }, 3000);
  }

}
