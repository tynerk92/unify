import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'unify-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() label: string
  @Input() route: string

  constructor() {}

  ngOnInit(): void {}
}
