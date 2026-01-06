import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpStudents } from '../services/http-students';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { Pipe1Pipe } from '../pipes/pipe1-pipe';

@Component({
  selector: 'app-students',
  imports: [FormsModule,CommonModule, Pipe1Pipe],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  name:string='';
  age:string='';
  class:string='';
  roll:string='';
  list:any;
  student:any;
  date = new Date();
  search:string = '';

  ngOnInit(){
    this.getstudents();
    this.clear();
  }

  constructor(private service:HttpStudents, private cd: ChangeDetectorRef, ){}

  submit(){

      const newstudent = { name: this.name, age: this.age, class: this.class, roll: this.roll}
      this.service.post(newstudent).subscribe((res)=>{
        console.log("posted");
        this.getstudents();
        this.clear();
      });

    }
  

  getstudents(){
    this.service.get().subscribe((res)=>{
      this.list = res;
      this.cd.detectChanges();
      console.log("get");
      
    })
  }
  del(id:any){
    this.service.delete(id).subscribe();
    console.log(id);
    this.getstudents()
    
  }
  edit(id:any){}
  clear(){
    this.name = '';
    this.age='';
    this.class='';
    this.roll='';
  }
}
