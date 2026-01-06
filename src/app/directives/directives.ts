import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CDirective } from '../directive/c-directive';
import { Parent } from '../compcom/parent/parent';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule, CDirective],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  age: number =16;
  age1: number = 18;
  variable:string ='';

  fruits : string[] = ["Mango", "Apple","Grapes"];

  users : any[] = [{name: "John", age: 20}, {name: "dev", age:18}, {name:"ALice", age: 19}]
    users1 : any[] = [{name: "devi", age: 20}, {name: "don", age:18}, {name:"ALice", age: 78}]

    color: string ="red";
    classname: string = 'text-success'

    suclass: string = "text-success"
    danclass: string = "text-danger"
}
