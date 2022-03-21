import {
  AfterContentInit,
  AfterViewInit,
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
export class WidgetGridComponent implements OnInit, AfterViewInit {
  @ViewChild('grid', { read: ElementRef }) grid: ElementRef

  private sidebarWidth: number
  private horizontalContentPadding: number

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const docElement = getComputedStyle(document.documentElement)
    this.sidebarWidth = this.convertRemToPixels(
      parseFloat(docElement.getPropertyValue('--u-sidebar-width'))
    )
    this.horizontalContentPadding = this.convertRemToPixels(
      parseFloat(docElement.getPropertyValue('--u-content-horizontal-padding'))
    )

    this.updateGridColumns(window.innerWidth, this.calculateTargetWidth())
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window

    this.updateGridColumns(target.innerWidth, this.calculateTargetWidth())
  }

  private calculateTargetWidth() {
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
    return (
      widgetMinWidth * widgetColumns +
      widgetGap * (widgetColumns - 1) +
      this.sidebarWidth +
      this.horizontalContentPadding * 2
    )
  }

  private updateGridColumns(innerWidth: number, targetWidth: number) {
    if (innerWidth <= targetWidth) {
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
