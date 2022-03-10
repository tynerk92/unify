import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { WidgetComponent } from './widget/widget.component'
import { WidgetGridModule } from 'src/app/shared/widget-grid/widget-grid.module'

@NgModule({
  declarations: [DashboardComponent, AdminDashboardComponent, WidgetComponent],
  imports: [CommonModule, WidgetGridModule],
})
export class DashboardModule {}
