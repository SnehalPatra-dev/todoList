import { Component } from '@angular/core';
import { ITodo } from './interface/i-todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ITodo {
  title = 'Tasks at hand:';
  taskName = ''; taskimportant = false;
  todoobj1: ITodo[] = [{ taskName: 'Get biscuits', taskimportant: true },
  { taskName: 'Update Unavailability table', done: false, taskimportant: true },
  { taskName: 'Complete Angular Tutorial Playlist', done: false, taskimportant: true },
  { taskName: 'Buy grains for birds', done: false, taskimportant: true },
  { taskName: 'Buy medicines', done: false, taskimportant: true },
  { taskName: 'Buy a bulb', done: false, taskimportant: false },
  { taskName: 'Pay cable charge in advance', done: false, taskimportant: false },
  { taskName: 'Buy an extra jar', done: false, taskimportant: false }
  ];

  public getTitle(): string {
    return this.title;
  }

  public addtodoelement(newtodoelement): void {
    var newtodo = {
      taskName: newtodoelement,
      done: false,
      taskimportant: false
    };
    this.todoobj1.push(newtodo);
  }

  public deletetodoelement(todoloopelement) {
    this.todoobj1 = this.todoobj1.filter(taskelement => taskelement.taskName !== todoloopelement.taskName);
  }

  public ToggleTaskimportant(todoloopelement): void {

    todoloopelement.taskimportant = !todoloopelement.taskimportant;
  }

  public ToggleTaskdone(todoloopelement): void {
    todoloopelement.done = !todoloopelement.done;
  }


}
