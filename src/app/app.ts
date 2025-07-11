import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public todos: any[] = [];
  public titleMain: String = 'Tarefas:';

  constructor(){
    this.todos.push('trabalhar');
    this.todos.push('estudar');
    this.todos.push('caminhar');
    this.todos.push('treinar');
    this.todos.push('ler');
  }

  alterarTexto(){
    this.titleMain = 'Mudando o Título';
  }

  protected readonly title = signal('project-todo');
}
