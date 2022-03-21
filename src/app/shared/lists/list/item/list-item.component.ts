import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'unify-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit, AfterViewInit {
  @Input() columns: number
  @ViewChild('listItem') listItem: ElementRef<HTMLDivElement>

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.listItem.nativeElement.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`
  }
}
