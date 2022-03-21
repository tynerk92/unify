import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from 'src/app/_guards/auth.guard'
import { AdminGuard } from './_guards/admin.guard'
import { TeamsComponent } from './teams/teams.component'
import { AdminDashboardComponent } from 'src/app/views/admin/dashboard/admin-dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
