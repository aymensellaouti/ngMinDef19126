import { Directive, HostBinding, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'this.bgc()',
    '(mouseenter)': 'this.onMouseEnter()',
    '(mouseleave)': 'this.onMouseLeave()',
  }
})
export class Highlight {
  // @HostBinding('style.backgroundColor') bgc = 'red';
  bgc = signal('red');
  constructor() { }

  // @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc.set('yellow');
  }
  // @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc.set('red');
  }
}
