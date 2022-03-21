import { Component, ContentChildren, OnInit, QueryList } from '@angular/core'
import { CardListItemComponent } from './item/card-list-item.component'

@Component({
  selector: 'unify-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @ContentChildren(CardListItemComponent)
  cardListItems: QueryList<CardListItemComponent>

  constructor() {}

  ngOnInit(): void {}
}
