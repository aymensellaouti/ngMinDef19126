import { computed, inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { APP_API } from "../../config/app.api";
import { TodoApi } from "../todo/todo.component";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  nbTodos = computed(() => this.#todos().length);
  http = inject(HttpClient);

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((todos) => [...todos, todo]);
    //this.#todos().push(todo);
    // this.#todos.update((todos) => {
    //   this.#todos().push(todo);
    //   return this.#todos();
    // });
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    this.#todos.update((todos) => todos.filter((actualTodo) => actualTodo != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    console.log(this.#todos());
  }

  getTodoApi(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>(APP_API.todo);
  }
}
