//Utilização padrão da implementação do componente, já na criação do projeto Angular
import { Component } from '@angular/core';
//Importação da lista do arquivo.ts, que foi exportado
import { alunos } from './arquivo';

//Definições do Componente Padrão
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Mais algumas padronizações com o título do componente e a atribuição para o uso do que está no arquivo.ts também
export class AppComponent {
  title = 'tabela';
  //Nomeação para o componente reconhecer o que está no arquivo.ts
  lista_aluno = alunos;
}
