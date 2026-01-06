import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './http-user.html',
  styleUrl: './http-user.css',
})
export class HttpUser implements OnInit {
  name: string = '';
  age: number = 0;
  email: string = '';
  city: string = '';
  list: any;
  user: any ;

  constructor(public service: HttpService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getusers();
    this.clear();
  }

  sub() {
    if (!this.user) {
      const newUser = {
        name: this.name,
        age: this.age,
        email: this.email,
        city: this.city,
      };

      this.service.submit(newUser).subscribe(() => {
        this.getusers();
        this.clear();
      });
    } else {
      const updatedUser = {
        name: this.name,
        age: this.age,
        email: this.email,
        city: this.city,
      };

      this.service.put(this.user.id, updatedUser).subscribe(() => {
        this.getusers();
        this.clear();
        this.user = null;
      });
    }
  }

  getusers() {
    this.service.get().subscribe((res) => {
      this.list = res;
      this.cd.detectChanges();
    });
  }

  delete(id: any) {
    this.service.delete(id).subscribe(() => {
      this.getusers();
    });
  }

  edit(item: any) {
    this.user = item;
    this.name = item.name;
    this.age = item.age;
    this.email = item.email;
    this.city = item.city;
  }

  clear() {
    this.name = '';
    this.age = 0;
    this.email = '';
    this.city = '';
  }
}
