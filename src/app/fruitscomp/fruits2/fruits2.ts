import { Component } from '@angular/core';
import { FruitService } from '../../services/fruit-service';

@Component({
  selector: 'app-fruits2',
  imports: [],
  templateUrl: './fruits2.html',
  styleUrl: './fruits2.css',
  providers: [FruitService]

})
export class Fruits2 {
num:number = 0;
constructor(public fruitsservice:FruitService){}
}
