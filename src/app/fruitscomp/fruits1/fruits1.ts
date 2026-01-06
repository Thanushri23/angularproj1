import { Component } from '@angular/core';
import { FruitService } from '../../services/fruit-service';
import { CommonModule } from '@angular/common';
import { Fruits2 } from '../fruits2/fruits2';
import { Fruits3 } from '../fruits3/fruits3';
import { Parent } from '../../compcom/parent/parent';

@Component({
  selector: 'app-fruits1',
  imports: [CommonModule, Fruits2, Fruits3, Parent],
  templateUrl: './fruits1.html',
  styleUrl: './fruits1.css',
})
export class Fruits1 {
  list:any[] = [];
num:number = 0;

  constructor(public fruitservice:FruitService){
    console.log(fruitservice.fruits)
    this.list = fruitservice.fruits;
  }
  
  
  


}
