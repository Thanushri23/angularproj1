import { Component } from '@angular/core';
import { FruitService } from '../../services/fruit-service';

@Component({
  selector: 'app-fruits3',
  imports: [],
  templateUrl: './fruits3.html',
  styleUrl: './fruits3.css',
})
export class Fruits3 {
num:number = 0;
constructor(public fruitsservice:FruitService){}

}
