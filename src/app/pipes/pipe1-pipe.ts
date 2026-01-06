import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1',
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any, searchtext:any): any {
    console.log(searchtext);
    if(!value && ! searchtext){
      return value;
    }
    return value.filter((item : any)=>{
       return (item.name.toLowerCase().includes(searchtext.toLowerCase())||
                item.age.toLowerCase().includes(searchtext.toLowerCase())||
              item.class.toLowerCase().includes(searchtext.toLowerCase())||
            item.roll.toLowerCase().includes(searchtext.toLowerCase()));   })
  }

  constructor(){
    console.log('custom pipe called')
  }

}
