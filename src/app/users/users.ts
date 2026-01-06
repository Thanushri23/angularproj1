import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../services/users-service';
import { Usersinfo } from '../usersinfo/usersinfo';

@Component({
  selector: 'app-users',
  imports: [FormsModule,Usersinfo],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  first:string = "";
  last:string ="";
  email:string ="";
userslist:any;




constructor(private usersservice:UsersService){}

store(){
  this.userslist = {firstname: this.first, lastname: this.last, email: this.email}
  this.usersservice.storeusers(this.userslist);
 
}
}
