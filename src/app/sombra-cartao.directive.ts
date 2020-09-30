import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSombraCartao]'
})
export class SombraCartaoDirective {
  @HostBinding('style.boxShadow')sombra :string;
  @Input('appSombraCartao') var: string;

  @HostListener('mouseover') MouseinEvent(){
    this.sombra=this.var;
}
  @HostListener('mouseleave') MouseOutEvent(){
    this.sombra="";
  }


}
