import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  subjectvar = new Subject();

  users = new Subject();
  busers= new BehaviorSubject<any>([]);
  
  
  storeusers(data:any){
    // const current = this.busers.getValue();
    // const updated = current.concat(data);
    this.users.next(data);
    this.busers.next(data);
    console.log(data);
  }
  getusers(){
    // return this.users;
    return this.busers;
  }


  storedata(data:any){
    this.subjectvar.next(data);
  }
  getdata(){
    return this.subjectvar;
  }
}
