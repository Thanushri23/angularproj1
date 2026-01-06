import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpStudents {
  
  base = 'http://localhost:3000/students';
  constructor(private http:HttpClient){}

  post(data:any){
    return this.http.post(this.base, data);
  }

  get(){
    return this.http.get(this.base);
  }
  put(uniqueid:any, data:any){
    return this.http.put(`${this.base}/${uniqueid}`,data)
  }
  delete(uniqueid:any){
    return this.http.delete(`${this.base}/${uniqueid}`)
  }

}
