import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  task = '';
  taskList: { id: number; task: string }[] = [];
  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    console.log(this.taskList);
  }
  remove(id: number) {
    this.taskList = this.taskList.filter((item) => item.id !== id);
  }
  protected readonly title = signal('todoangular');
}
