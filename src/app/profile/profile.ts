import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  users:any = [{name:"Vaish"}, {name:"Tej"}];
  text:any ="";

  constructor(private route: Router,private usersservice: UsersService) {
this.get();

  }
 


  goToSettings(){
    this.route.navigate(['/settings', 'from profile']);
    let list = JSON.stringify(this.users);
    localStorage.setItem('users', list);
  }

  get(){
    this.usersservice.getdata().subscribe(Response => {
      console.log(Response);
      this.text = Response;
    });
  }

}
