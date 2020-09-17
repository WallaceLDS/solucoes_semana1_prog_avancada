import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curso=[
    {nome: "Analise e Desenvolvimento"},
    {nome: "Gestão empresarial"},
    {nome: "Eventos"},
    {nome: "Gestão de RH"},
   ];
   onAdicionaCurso(nome){
     this.curso=[nome, ...this.curso]
   }

}
