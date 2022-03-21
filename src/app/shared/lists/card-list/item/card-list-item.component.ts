import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'unify-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.scss'],
  animations: [
    trigger('slideOpen', [
      state(
        'open',
        style({
          height: '*',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
        })
      ),
      transition('open => closed', [animate('0.1s ease-in-out')]),
      transition('closed => open', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class CardListItemComponent implements OnInit {
  @Input() title: string

  open: boolean = false

  constructor() {}

  ngOnInit(): void {}

  toggleContentView() {
    this.open = !this.open
  }

  closeContentView() {
    this.open = false
  }
}
