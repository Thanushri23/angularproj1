import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apiusersservice } from '../services/apiusersservice';

@Component({
  selector: 'app-api-employee-edit',
  imports: [FormsModule],
  templateUrl: './api-employee-edit.html',
  styleUrl: './api-employee-edit.css',
})
export class ApiEmployeeEdit {
  name:string = '';
  department:string="";
  skills:any = [];
  skill:string='';
  projId:string = '';
  projname:string = '';
  role:string = '';
  projects:any = [];
  address:any;
  city:string = '';
  pin:number=0;
  employee:any = [];

  constructor(private service: Apiusersservice){

  }

  submit(){
    this.projects = [{projectId: this.projId, projectName: this.projname, role: this.role}]
    if (this.skill.trim()) {
      this.skills.push(this.skill.trim());
      this.skill = ''; // clear input
    }
    this.address = {city: this.city, pincode: this.pin}
    this.employee = [{
      name: this.name,
      department: this.department,
      skills: this.skills,
      projects: this.projects,
      address: this.address
    }]
    this.service.employees.push(...this.employee);
  console.log(this.service.employees);
  console.log(this.employee)
  }

}
