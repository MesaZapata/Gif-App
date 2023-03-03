import { GifsService } from './../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial(){
    return this.GifsService.historial;
  }

  constructor(private GifsService: GifsService) { }

  buscar(termino: string) {
    this.GifsService.buscarGifs(termino);
  }

}
