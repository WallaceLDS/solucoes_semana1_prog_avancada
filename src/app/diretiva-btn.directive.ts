import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDiretivaBTN]',
})
export class DiretivaBTNDirective {
  @HostBinding ('style.background') btnStyle: string;
  @Input ('appDiretivaBTN') StelyInput:string;

  @HostListener('mouseover') MouseInEvent(){
    this.btnStyle = this.StelyInput;
  }
  @HostListener('mouseleave') MouseoutEvent(){
    this.btnStyle="";
  }


}
