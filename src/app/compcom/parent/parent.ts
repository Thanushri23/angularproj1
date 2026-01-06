import { Component, ViewChild } from '@angular/core';
import { Child1 } from '../child1/child1';
import { FormsModule } from '@angular/forms';
import { FruitService } from '../../services/fruit-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child1, FormsModule, CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  name: string = 'mary';
  number: string = '';
  value: any;
  mod2: any;
  userslist: any[] = [];
  itemslist: any[] = [];
  line: string = '';

  // viewchild

  @ViewChild(Child1) childObj!: Child1;

  constructor(private usersservice: FruitService) {
    this.userslist = usersservice.users;
    console.log(this.userslist);
  }

  get(val: any) {
    console.log(val);
    this.value = val;
  }
  set(mod: any) {
    this.mod2 = mod;
    console.log(mod);
  }
  items(items: any) {
    this.itemslist = items;
  }
  view() {
    console.log(this.childObj.childfunc());
  }

  ngAfterViewInit() {
    //  this.childObj.childfunc();
  }
}
