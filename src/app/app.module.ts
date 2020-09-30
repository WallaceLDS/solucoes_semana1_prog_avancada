import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FatecInfoComponent } from './fatec-info/fatec-info.component';
import { FatecCursoComponent } from './fatec-curso/fatec-curso.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DiretivaBTNDirective } from './diretiva-btn.directive';
import { SombraCartaoDirective } from './sombra-cartao.directive';

@NgModule({
  declarations: [
    AppComponent,
    FatecInfoComponent,
    FatecCursoComponent,
    CadastroCursoComponent,
    CadastroAlunoComponent,
    DiretivaBTNDirective,
    SombraCartaoDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
