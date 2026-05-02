import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  filter: string = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Load initial todos
    this.loadTodos();
    
    // Subscribe to route changes
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        this.filter = segments[0].path;
      } else {
        this.filter = 'all';
      }
    });
  }

  loadTodos(): void {
    // Load from localStorage or use default
    const stored = localStorage.getItem('todos');
    if (stored) {
      this.todos = JSON.parse(stored);
    } else {
      this.todos = [
        { id: 1, title: 'Learn Angular', completed: false, createdAt: new Date() },
        { id: 2, title: 'Build Microfrontend App', completed: false, createdAt: new Date() },
        { id: 3, title: 'Deploy to Production', completed: false, createdAt: new Date() }
      ];
      this.saveTodos();
    }
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle.trim(),
        completed: false,
        createdAt: new Date()
      };
      this.todos.unshift(newTodo);
      this.newTodoTitle = '';
      this.saveTodos();
    }
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveTodos();
  }

  get filteredTodos(): Todo[] {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(t => !t.completed);
      case 'completed':
        return this.todos.filter(t => t.completed);
      default:
        return this.todos;
    }
  }

  get activeTodosCount(): number {
    return this.todos.filter(t => !t.completed).length;
  }

  get completedTodosCount(): number {
    return this.todos.filter(t => t.completed).length;
  }
}
