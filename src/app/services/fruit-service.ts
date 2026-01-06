import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  
  fruits:any[] = ["Mango", "Apple", "Banana"];
  users:any[] = [
    {name:"Mary", age:"18"},
  {name:"Robin", age:"17"},
    {name:"Jane", age:"20"}]
    
  number:number=0;

  constructor(){

  }
  increase(){
     this.number++;
  }
  decrease(){
     this.number--;
  }

  getTotal(){
    return this.number;
  }

  
}
