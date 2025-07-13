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
  this.load();
  }

  alterarTexto(){
    this.titleMain = 'Mudando o Título';
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.save();

  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load(){
    const data = localStorage.getItem('todos');
    this.todos = data ? JSON.parse(data) : [];
  }



  protected readonly title = signal('project-todo');
}
