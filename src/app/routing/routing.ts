import { Component, Directive } from '@angular/core';
import { Directives } from '../directives/directives';
import { Fruits1 } from '../fruitscomp/fruits1/fruits1';

@Component({
  selector: 'app-routing',
  imports: [Directives,Fruits1],
  templateUrl: './routing.html',
  styleUrl: './routing.css',
})
export class Routing {

}
