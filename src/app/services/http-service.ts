import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
 
  base = "http://localhost:3000/users";
  constructor(private http: HttpClient){}

  submit(data:any){
    return this.http.post(this.base,data)
    
  }

  get(){
    return this.http.get(this.base)
  }

  delete(uniqueid:any){
      return this.http.delete(`http://localhost:3000/users/${uniqueid}`)

  }
  put(uniqueid:any, data:any){
    return this.http.put(`${this.base}/${uniqueid}`,data)
  }
  
}
