import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule, CommonModule],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
})
export class Child1 {
  @Input() namecase: string = '';

  @Input() num: string = '';

  mod: string = '';

  @Output() act = new EventEmitter();

  @Output() data = new EventEmitter();

  @Input() users: any[] = [];
  @Output() list = new EventEmitter();

  ngOnChanges() {
    console.log(this.namecase);
    console.log(this.num);
    console.log(this.users);
  }

  submit() {
    this.act.emit('act');
  }

  show() {
    this.data.emit(this.mod);
    console.log('show');
    console.log(this.mod);
  }
  go() {
    this.list.emit(this.users);
  }

  childfunc(): any {
    return 'child function called';
  }
}
