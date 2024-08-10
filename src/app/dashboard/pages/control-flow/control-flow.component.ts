import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';


type grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  // se dice que es tipo false (@if)
  public showContent = signal(false);

  // quiere decir que sera tipo grade <> (@switch)
  public grade = signal<grade>('A');

  // @for
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React'])
  public frameworks2 = signal([])


  // usando esta funcion cambiara el valor al boton  (if)
  public toggleContent() {
    // me cambiara el valor actual
    this.showContent.update( value => !value );

    // this.grade.set('')
  }

}
