import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild,  } from '@angular/core';

@Directive({
  selector: '[appCDirective]',
})
export class CDirective {
   @Input() highlightcolor: string ="";

  constructor(private elementRef: ElementRef, private renderer2:Renderer2) { 
    console.log("cccccccccccccccc: ", elementRef);
    // elementRef.nativeElement.innerHTML ="NgFor case";
    
    // renderer2.setProperty(elementRef.nativeElement,'innerHTML' ,"NgFor case using renderer2")
    renderer2.setStyle(elementRef.nativeElement, "backgroundColor", "lightgrey")
    // renderer2.addClass(elementRef.nativeElement,"text-success");


    
  }
  ngOnChanges(){
    this.renderer2.setStyle(this.elementRef.nativeElement,"backgroundColor", this.highlightcolor)
  }
  // // hotslistener
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.renderer2.setStyle(this.elementRef.nativeElement,"color", "blue");
  // }
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.renderer2.setStyle(this.elementRef.nativeElement,"color", "red");
  // }

  // // host Binding
  // @HostBinding("innerHTML") abcd ="this is host binding";

  // TEMPLATE REFERENCE VARIABLE

  @ViewChild('nice') text:string = "";

}
