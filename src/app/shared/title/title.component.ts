import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl mb-5">{{tittle}}</h1>`,
  styles: ``
})
export class TitleComponent {
  
  // tittle! Es indicar que siempre tendra un valor
  @Input( {required: true} ) tittle!: string;

}
