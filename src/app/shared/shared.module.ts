import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WidgetGridComponent } from './widgets/widget-grid/widget-grid.component'
import { WidgetComponent } from './widgets/widget/widget.component'
import { SearchComponent } from './search/search.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ListComponent } from './lists/list/list.component'
import { CardListComponent } from './lists/card-list/card-list.component'
import { CardListItemComponent } from './lists/card-list/item/card-list-item.component'
import { ListItemComponent } from './lists/list/item/list-item.component';
import { ListFilterComponent } from './lists/list/list-filter/list-filter.component'

@NgModule({
  declarations: [
    WidgetGridComponent,
    WidgetComponent,
    CardListComponent,
    CardListItemComponent,
    SearchComponent,
    ListComponent,
    ListItemComponent,
    ListFilterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    WidgetGridComponent,
    WidgetComponent,
    CardListComponent,
    CardListItemComponent,
    ListComponent,
    ListItemComponent,
  ],
})
export class SharedModule {}
