import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminRoutingModule } from './admin-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component'
import { AddTeamsWidgetComponent } from './dashboard/add-teams-widget/add-teams-widget.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AdminDashboardComponent, AddTeamsWidgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
