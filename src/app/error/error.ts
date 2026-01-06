import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-error',
  imports: [FormsModule],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class ErrorComponent {
  num1:number = 0;
  num2:number = 0;
  v1:any;
  v2:any=0;
name:any;
users:any;
val:any;
constructor(){
  // try{
  //   this.name = this.users.name;
  // }
  // catch(err){
  //   this.name= err;
  // }
}
ngOnInit(){
  try{
    this.name = this.users.name;
     if (!this.users) {
    throw new Error('no user');
  }
}
  catch(err:any){
    console.log(err);
    
    this.name= 'User object is undefined';
  }
}

sum(){
  try{
  this.val = this.num1 / this.num2;
  if(!this.val|| this.num2 == 0){
    throw new Error('sdfghjk');     
  }
}
  catch(err: any){
    this.val = err;
  }

}


show(){
  try{
    this.v1 = this.v2;
    if(this.v2 == '' ){
      throw new Error('empty')
    }
  }
  catch(err){
    this.v1 = err;
  }
}
}

