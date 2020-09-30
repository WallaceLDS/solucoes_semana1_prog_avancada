import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent  {
  @Input() c;
  @Output() novoAluno = new EventEmitter();
  alunos = [
    {name: "Adolf", idade:"23",email: "Adolf1997@gmail.com",curso:"ADS"}
  ];
  onAdicionarAluno(nome,idade,email,curso){
    this.alunos=[{name: nome ,idade:idade,email: email,curso:curso}, ...this.alunos]
  }

  }




