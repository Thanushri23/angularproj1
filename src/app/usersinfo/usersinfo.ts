import { Component } from '@angular/core';
import { UsersService } from '../services/users-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usersinfo',
  imports: [CommonModule],
  templateUrl: './usersinfo.html',
  styleUrl: './usersinfo.css',
})
export class Usersinfo {

  list:any = [];
  list1:any;

  constructor(private userservice:UsersService){
    this.get();
       console.log("hiho") 

  }

  get(){
    this.userservice.getusers().subscribe(Response => {
      this.list.push(Response);
    console.log(this.list)  ;
   })
 
   
  }

}
