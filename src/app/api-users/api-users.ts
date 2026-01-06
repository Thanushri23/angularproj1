import { Component } from '@angular/core';
import { Apiusersservice } from '../services/apiusersservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-users',
  imports: [CommonModule],
  templateUrl: './api-users.html',
  styleUrl: './api-users.css',
})
export class ApiUsers {

  list:any;
  constructor(private service: Apiusersservice){
this.list = service.users;
  }
}
