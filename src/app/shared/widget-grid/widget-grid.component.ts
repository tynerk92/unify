import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'unify-widget-grid',
  templateUrl: './widget-grid.component.html',
  styleUrls: ['./widget-grid.component.scss'],
})
export class WidgetGridComponent implements OnInit, AfterContentInit {
  @ViewChild('grid', { read: ElementRef }) grid: ElementRef

  private toolbarWidth: number
  private horizontalContentPadding: number

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const docElement = getComputedStyle(document.documentElement)
    this.toolbarWidth = this.convertRemToPixels(
      parseFloat(docElement.getPropertyValue('--u-sidebar-width'))
    )
    this.horizontalContentPadding = this.convertRemToPixels(
      parseFloat(docElement.getPropertyValue('--u-content-horizontal-padding'))
    )
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const gridElement = getComputedStyle(this.grid.nativeElement)
    const widgetMinWidth = this.convertRemToPixels(
      parseFloat(gridElement.getPropertyValue('--widget-min-width'))
    )
    const widgetGap = this.convertRemToPixels(
      parseFloat(gridElement.getPropertyValue('--widget-gap'))
    )
    const widgetColumns = parseInt(
      gridElement.getPropertyValue('--widget-initial-columns')
    )
    const targetWidth =
      widgetMinWidth * widgetColumns +
      widgetGap * (widgetColumns - 1) +
      this.toolbarWidth +
      this.horizontalContentPadding * 2

    const target = event.target as Window

    if (target.innerWidth <= targetWidth) {
      this.grid.nativeElement.style.setProperty('--widget-columns', '2')
    } else {
      this.grid.nativeElement.style.setProperty(
        '--widget-columns',
        'var(--widget-initial-columns)'
      )
    }
  }

  private convertRemToPixels(rem: number): number {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }
}
