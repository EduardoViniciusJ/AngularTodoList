import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo.models';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public todos: Todo[] = [];
  public titleMain: String = 'Tarefas:';
  public form: FormGroup; 

  constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    title: ['', [  
      Validators.minLength(3),
      Validators.maxLength(60),
      Validators.required
    ]]
  });
    this.todos.push(new Todo(1, 'Caminhar', false));
    this.todos.push(new Todo(2, 'Estudar', false));
    this.todos.push(new Todo(3, 'Treinar', true));
  }

  alterarTexto(){
    this.titleMain = 'Mudando o Título';
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }

  protected readonly title = signal('project-todo');
}
