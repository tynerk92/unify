import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[unifyPreventDefault]',
})
export class PreventDefaultDirective {
  @HostListener('any', ['$event'])
  public onSubmit(event: Event): void {
    console.log('Trying to prevent default')
    event.preventDefault()
  }
}
