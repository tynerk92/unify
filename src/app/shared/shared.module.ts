import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WidgetGridComponent } from './widgets/widget-grid/widget-grid.component'
import { WidgetComponent } from './widgets/widget/widget.component'

@NgModule({
  declarations: [WidgetGridComponent, WidgetComponent],
  imports: [CommonModule],
  exports: [WidgetGridComponent, WidgetComponent],
})
export class SharedModule {}
