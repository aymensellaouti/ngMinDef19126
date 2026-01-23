import { Component, inject, signal } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";
import { CvComponent } from "../../cv/cv-component/cv-component";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app.api";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { UUID_TOKEN } from "../../injectionTokens/uuid.injection-token";

export interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, AsyncPipe],
  providers: [TodoService],
})
export class TodoComponent {
  todoService = inject(TodoService);
  uuid = inject(UUID_TOKEN);
  todos = this.todoService.getTodos();
  todo = signal<Todo>(new Todo());
  todosApi = signal<TodoApi[]>([]);
  todos$ = this.todoService.getTodoApi();
  constructor() {
    this.todoService.getTodoApi().subscribe({
      next: (todos) => {
        this.todosApi.set(todos);
      },
    });
  }
  addTodo() {
    this.todo.update((todo) => ({
      ...todo,
      id: this.uuid()
    }));
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
