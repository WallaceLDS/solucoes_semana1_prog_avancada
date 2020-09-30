import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exibirCadastro: boolean = true;
  exibirAluno: boolean = false;


  cursos=[
    {nome: "Analise e Desenvolvimento"},
    {nome: "Gestão empresarial"},
    {nome: "Eventos"},
    {nome: "Gestão de RH"},
   ];
   onAdicionaCurso(nome){
     this.cursos=[nome, ...this.cursos]
   }
   exibirPagina(){
    this.exibirCadastro = !this.exibirCadastro;
    this.exibirAluno = !this.exibirAluno;
  }
}
