import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes: string[] = ['Deadpool', 'Ironman', 'Hulk', 'Spiderman', 'Capitan America']
  heroeBorrado: string  = '';
  borrarHeroe(){
    
    //Para remover el primer elemento del arreglo
    this.heroeBorrado = this.heroes.shift() || '';
    

    //Para remover el ultimo elemento del arreglo
    //this.heroes.pop();
  }
}
