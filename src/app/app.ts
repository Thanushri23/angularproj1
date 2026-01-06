import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'heloo';
  type = "text";
  place = "lion";
   num = 0;

  name = "";
  map= "";
  data="";

  state = "";
  act = "";
  
  
  func(){
    return "name";
  }
  click(name:string){
    console.log(name);
  }
  sub(){
  return this.num -= 1;
}
add(){
  return this.num += 1;
}
}; 
