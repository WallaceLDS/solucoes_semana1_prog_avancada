import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-fatec-curso',
  templateUrl: './fatec-curso.component.html',
  styleUrls: ['./fatec-curso.component.css']
})
export class FatecCursoComponent  {

  @Input() nomecurso;
  Styleheader(){
    return['headerStyle']
  }


}
