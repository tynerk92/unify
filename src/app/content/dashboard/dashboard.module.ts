import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { WidgetComponent } from './widget/widget.component'
import { WidgetGridModule } from 'src/app/shared/widget-grid/widget-grid.module'
import { AddTeamsWidgetComponent } from './admin-dashboard/add-teams-widget/add-teams-widget.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    WidgetComponent,
    AddTeamsWidgetComponent,
  ],
  imports: [
    CommonModule,
    WidgetGridModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class DashboardModule {}
