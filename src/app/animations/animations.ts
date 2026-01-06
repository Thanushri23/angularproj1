import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animations',
  imports: [],
  templateUrl: './animations.html',
  styleUrl: './animations.css',
  animations: [
    trigger('fade', [
      state('fadein', style({ opacity: 1 })),
      state('fadeout', style({ opacity: 0 })),
      transition('fadein <=> fadeout', animate('800ms ease-in-out')),
    ]),
    trigger('zoom',[
      state('small', style({
        transform: 'scale(0.5) '
      })),
      state('big', style({
        transform: 'scale(1)'
      })),
      transition('small <=> big', animate('400ms ease-in-out'))
    ]),
    trigger('slidex',[
      state('left', style({
        transform: 'translateX(30px) '
      })),
      state('right', style({
        transform: 'translateX(50px)'
      })),
      transition('left <=> right', animate('400ms ease-in-out'))
    ]),
    trigger('slidey',[
      state('up', style({
        transform: 'translateY(0px) '
      })),
      state('down', style({
        transform: 'translateY(70px)'
      })),
      transition('up <=> down', animate('400ms ease-in-out'))
    ]),
    trigger('rotate',[
      state('normal', style({
        transform: 'rotateY(0deg) translateX(0px)',
        
      })),
      state('rotated', style({
        transform: 'rotateY(180deg) translateX(0px)',

      })),
      transition('normal <=> rotated', animate('400ms ease-in-out'))
    ]),
    trigger('expandAnim', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '50px',
        opacity: 1,
        overflow: 'hidden'
      })),
      transition('closed <=> open', animate('300ms ease'))
    ]),
     trigger('expand', [
      state('min', style({
        height: '30px',
        width: '30px',
      })),
      state('max', style({
        height: '50px',
        opacity: '50px',
      })),
      transition('min <=> max', animate('300ms ease'))
    ])
  
  ],
})
export class Animations {
  state = 'small';
  isAnimate: any=false;
  xaxis = 'left';
  yaxis ='up';
  rot = 'normal';
open = false;
grow = 'min';
  
  change() {
    this.isAnimate = !this.isAnimate;
  }
  toggle() {
    this.state = this.state === 'small' ? 'big' : 'small';
  }
  slidex(){
    this.xaxis = this.xaxis === 'left' ? 'right' : 'left';
  }
  slidey(){
    this.yaxis = this.yaxis === 'up' ? 'down' : 'up';
  }
 
  rotate(){
this.rot = this.rot === 'normal'? 'rotated': 'normal';
  }
   growsize(){
this.grow = this.grow === 'min'? 'max': 'min';
  }
  over() { this.open = !this.open; }
}
