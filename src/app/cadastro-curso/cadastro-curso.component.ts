import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent  {
  valor;
@Output() cursoAdiciona = new EventEmitter();
   adicionacurso(nome){
     const curso = {
       nome: nome
     };
     this.cursoAdiciona.emit(curso);
   }

   Stylebtn(){
    return{
    backgroundColor:'#7B68EE',
    padding: '8px',
    border: 'solid',
    bordeRadius: '2px'

    }
   }

}
