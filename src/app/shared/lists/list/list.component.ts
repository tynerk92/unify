import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'unify-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  @Input() listHeaders: string[]
  @ViewChild('headerRow') headerRow: ElementRef<HTMLDivElement>

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.headerRow.nativeElement.style.gridTemplateColumns = `repeat(${this.listHeaders.length}, 1fr)`
  }
}
