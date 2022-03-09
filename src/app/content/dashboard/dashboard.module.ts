import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module'

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminDashboardModule],
})
export class DashboardModule {}
