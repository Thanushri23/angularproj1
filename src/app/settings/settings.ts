import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users-service';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

input:string ="";

  constructor(private route: ActivatedRoute, private usersservice: UsersService) {
    console.log(this.route.snapshot.paramMap.get('data'));
    console.log(localStorage.getItem('users'));
    let local:any = localStorage.getItem('users');
    console.log(JSON.parse(local));
    
  }



  
  func(){
    this.usersservice.storedata(this.input)
  }
}
