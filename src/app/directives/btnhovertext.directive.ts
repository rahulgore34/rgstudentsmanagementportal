import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnhovertext]',
  standalone: true
})
export class BtnhovertextDirective {

  constructor(private el: ElementRef, private rd: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.updateText('Create New Record');
    this.removeClass('round-btn');
    this.adddClass('square-btn');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.updateText('+');
    this.removeClass('square-btn');
    this.adddClass('round-btn');
  }

  updateText(text: string) {
    this.rd.setProperty(this.el.nativeElement, 'innerText', text);
  }

  adddClass(classname: string) {
    this.rd.addClass(this.el.nativeElement, classname);
  }

  removeClass(classname: string) {
    this.rd.removeClass(this.el.nativeElement, classname);
  }
}
