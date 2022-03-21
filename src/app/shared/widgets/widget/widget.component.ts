import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Component({
  selector: 'unify-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input()
  set width(width: number) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'grid-column',
      `span ${width}`
    )
  }
  @Input()
  set height(height: number) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'grid-row',
      `span ${height}`
    )
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {}
}
