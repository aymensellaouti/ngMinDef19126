import { computed, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  nbTodos = computed(() => this.#todos().length)
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
    this.#todos.update(
      todos => todos.filter((actualTodo) => actualTodo!=todo)
    );
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    console.log(this.#todos());
  }
}
