import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  app:string = "";

  constructor(private router:Router){
    
  }

  onclick(){
    this.router.navigate(['/routing'])
  }
}
