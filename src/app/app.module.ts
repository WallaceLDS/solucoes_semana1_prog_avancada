import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatecInfoComponent } from './fatec-info/fatec-info.component';
import { FatecCursoComponent } from './fatec-curso/fatec-curso.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecInfoComponent,
    FatecCursoComponent,
    CadastroCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
