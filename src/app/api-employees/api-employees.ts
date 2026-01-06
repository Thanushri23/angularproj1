import { Component } from '@angular/core';
import { Apiusersservice } from '../services/apiusersservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-employees',
  imports: [CommonModule],
  templateUrl: './api-employees.html',
  styleUrl: './api-employees.css',
})
export class ApiEmployees {
   list:any;

  constructor(private service: Apiusersservice){
this.list = service.employees;
  }

}
